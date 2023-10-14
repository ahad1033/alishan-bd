import React from 'react';

const SingleProducts = ({ product }) => {

    const { img, basinSize, mirrorSize,topSize, price, color, style, weight, modelNo  } = product;

    console.log(product);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="products" /></figure>
            <div className="card-body">
                <h2 className="card-title">Model: {modelNo}</h2>
                <p>Style: {style}</p>
                <p>Color: {color}</p>
                <p>Basin Size: {basinSize}</p>
                <p>Mirror Size: {mirrorSize}</p>
                <div className="card-actions justify-end">
                    <button className="btn w-fit bg-[var(--text-primary)] border-0  text-white font-semibold">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;