import React, { useEffect, useState } from 'react';
import SingleProducts from './SingleProducts';

const OurProducts = () => {

    const [ products, setProducts] = useState([]);
    
    useEffect( () =>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.log(err))
    },[])

    return (
        <section className='bg-base-200'>
            <h2 className='text-center text-black font-bold text-5xl py-8'>Our Stone Basins</h2>
            <div className='section-container'>
                {products.map((product) => (<SingleProducts key={product.modelNo} product={product} />))}
            </div>
        </section>
    );
};

export default OurProducts;