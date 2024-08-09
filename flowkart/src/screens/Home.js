import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Home.css'; // Import custom CSS file

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            const csvFilePath = process.env.PUBLIC_URL + '/products.csv';
            
            Papa.parse(csvFilePath, {
                download: true,
                header: true,
                complete: (result) => {
                    setItems(result.data);
                },
                error: (error) => {
                    console.error('Error parsing CSV file:', error);
                }
            });
        };

        fetchData();
    }, []);

    const addToCart = (item) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4"><strong>Shop now!</strong></h1>
            <Link to="/print" className="block w-32 h-8 mx-auto bg-blue-500 text-white px-4 my-4">Print Shop</Link>
            <div className="row">
                {items.slice(0, items.length - 1).map(item => (
                    <div key={item.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card h-100">
                            <img src={item.image} className="card-img-top fixed-img" alt={item.name} />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                {item.quantity && (
                                    <p className="card-text"><strong>{item.quantity}</strong></p>
                                )}
                                <p className="card-text"><strong>{item.price}</strong></p>
                                <button
                                    className="btn btn-primary mt-auto"
                                    onClick={() => addToCart(item)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
