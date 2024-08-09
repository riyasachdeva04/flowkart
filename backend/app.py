from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from apyori import apriori

app = Flask(__name__)
CORS(app)

# Load your dataset
data = pd.read_csv('products.csv')

# Prepare the data for apriori using product names
transactions = data.groupby('id')['name'].apply(list).tolist()

# Apply apriori algorithm with more lenient parameters
rules = list(apriori(transactions, min_support=0.01, min_confidence=0.1, min_lift=1.0))

@app.route('/recommendations', methods=['POST'])
def get_recommendations():
    try:
        request_data = request.json
        cart_items = request_data['cartItems']
        
        if not isinstance(cart_items, list) or not all(isinstance(item, str) for item in cart_items):
            raise ValueError("Invalid input format. 'cartItems' should be a list of strings.")
        
        recommended_items = set()
        for rule in rules:
            items = list(rule.items)
            if len(items) > 1:  # Ensure the rule has at least 2 items
                if any(item in cart_items for item in items):
                    recommended_items.update(set(items) - set(cart_items))
        
        # If no recommendations found, suggest popular items
        if not recommended_items:
            popular_items = data.sort_values('quantity', ascending=False)['name'].head(5).tolist()
            recommended_items = set(popular_items) - set(cart_items)
        for item in recommended_items:
            print(item)
        return jsonify({'recommendedItems': list(recommended_items)[:5]})  # Limit to top 5 recommendations
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)