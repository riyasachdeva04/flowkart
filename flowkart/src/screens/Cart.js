import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [recommendedItems, setRecommendedItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCartItems = () => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            setCartItems(cart);
        };

        fetchCartItems();
    }, []);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:5000/recommendations', {
                    cartItems: cartItems.map(item => item.type) // Send item names to the backend
                });
                setRecommendedItems(response.data.recommendedItems);
            } catch (error) {
                console.error('Error fetching recommendations:', error);
                setError('Failed to fetch recommendations');
            }
        };

        if (cartItems.length > 0) {
            fetchRecommendations();
        }
    }, [cartItems]);

    const removeFromCart = (itemToRemove) => {
        const updatedCart = cartItems.filter(item => item.id !== itemToRemove.id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartItems(updatedCart);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0).toFixed(2);
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="bg-white shadow-md rounded p-4 mb-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center justify-between border-b pb-4 mb-4">
                                <div className="flex items-center">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 bg-gray-200 mr-4" />
                                    <div>
                                        <h2 className="font-bold">{item.name}</h2>
                                        <p className="text-gray-600">Price: {item.price}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="number"
                                        min="1"
                                        defaultValue="1"
                                        className="w-16 p-2 border rounded"
                                    />
                                    <button
                                        className="ml-4 text-red-500"
                                        onClick={() => removeFromCart(item)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className="flex justify-between">
                            <div>
                                <p>Subtotal: ${calculateTotal()}</p>
                                <p>Shipping: $X.XX</p>
                                <p className="font-bold">Total: ${calculateTotal()}</p>
                            </div>
                            <Link to="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded">Checkout</Link>
                        </div>
                    </div>
                </>
            )}

            {/* Recommended Products Section */}
            {error && <p className="text-red-500">{error}</p>}
            {recommendedItems.length > 0 && (
                <div className="bg-white shadow-md rounded p-4 mt-8">
                    <h2 className="text-xl font-bold mb-4">Recommended for You</h2>
                    <div>
                        {recommendedItems.map(item => (
                            <div key={item} className="flex items-center border-b pb-4 mb-4">
                                <div className="flex items-center">
                                    <img src={`/images/${item}.png`} alt={item} className="w-16 h-16 bg-gray-200 mr-4" />
                                    <div>
                                        <h3 className="font-bold">{item}</h3>
                                        <p className="text-gray-600">Price: TBD</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
