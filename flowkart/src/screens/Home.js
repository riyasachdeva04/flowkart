import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Sample products array with images, names, descriptions, and prices
        const sampleItems = [
            { id: 1, name: 'Product 1', description: 'Description for Product 1', price: '$29.99', image: 'https://via.placeholder.com/150' },
            { id: 2, name: 'Product 2', description: 'Description for Product 2', price: '$39.99', image: 'https://via.placeholder.com/150' },
            { id: 3, name: 'Product 3', description: 'Description for Product 3', price: '$49.99', image: 'https://via.placeholder.com/150' },
            { id: 4, name: 'Product 4', description: 'Description for Product 4', price: '$59.99', image: 'https://via.placeholder.com/150' },
            { id: 5, name: 'Product 5', description: 'Description for Product 5', price: '$69.99', image: 'https://via.placeholder.com/150' },
            { id: 6, name: 'Product 6', description: 'Description for Product 6', price: '$79.99', image: 'https://via.placeholder.com/150' },
            { id: 7, name: 'Product 7', description: 'Description for Product 7', price: '$89.99', image: 'https://via.placeholder.com/150' },
            { id: 8, name: 'Product 8', description: 'Description for Product 8', price: '$99.99', image: 'https://via.placeholder.com/150' },
            { id: 9, name: 'Product 9', description: 'Description for Product 9', price: '$109.99', image: 'https://via.placeholder.com/150' },
            { id: 10, name: 'Product 10', description: 'Description for Product 10', price: '$119.99', image: 'https://via.placeholder.com/150' },
            { id: 11, name: 'Product 11', description: 'Description for Product 11', price: '$129.99', image: 'https://via.placeholder.com/150' },
            { id: 12, name: 'Product 12', description: 'Description for Product 12', price: '$139.99', image: 'https://via.placeholder.com/150' },
            { id: 13, name: 'Product 13', description: 'Description for Product 13', price: '$149.99', image: 'https://via.placeholder.com/150' },
            { id: 14, name: 'Product 14', description: 'Description for Product 14', price: '$159.99', image: 'https://via.placeholder.com/150' },
            { id: 15, name: 'Product 15', description: 'Description for Product 15', price: '$169.99', image: 'https://via.placeholder.com/150' },
            { id: 16, name: 'Product 16', description: 'Description for Product 16', price: '$179.99', image: 'https://via.placeholder.com/150' },
            { id: 17, name: 'Product 17', description: 'Description for Product 17', price: '$189.99', image: 'https://via.placeholder.com/150' },
            { id: 18, name: 'Product 18', description: 'Description for Product 18', price: '$199.99', image: 'https://via.placeholder.com/150' },
            { id: 19, name: 'Product 19', description: 'Description for Product 19', price: '$209.99', image: 'https://via.placeholder.com/150' },
            { id: 20, name: 'Product 20', description: 'Description for Product 20', price: '$219.99', image: 'https://via.placeholder.com/150' },
        ];

        // Set the sample items to the state
        setItems(sampleItems);
    }, []);

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4"><strong>Shop now!</strong></h1>
            <Link to="/print" className="block w-32 h-8 mx-auto bg-blue-500 text-white px-4 my-4">Print Shop</Link>
            <div className="row">
                {items.map(item => (
                    <div key={item.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card h-100">
                            <img src={item.image} className="card-img-top" alt={item.name} />
                            <div className="card-body d-flex flex-column align-items-center"> {/* Added align-items-center class */}
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text"><strong>{item.price}</strong></p>
                                <button className="btn btn-primary mt-auto">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
