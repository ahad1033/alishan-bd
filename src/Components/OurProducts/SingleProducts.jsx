import React from 'react';

const SingleProducts = ({ product }) => {

    const { img, basinSize, mirrorSize,topSize, price, color, style, weight, modelNo  } = product;

    console.log(product);
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img.img1} alt="products" /></figure>
            <div className="card-body">
                <h2 className="card-title text-[var(--text-primary)] font-bold justify-center">Model: {modelNo}</h2>
                <p>Style: {style}</p>
                <p>Color: {color}</p>
                <p>Basin Size: {basinSize}</p>
                <p>Mirror Size: {mirrorSize}</p>
                <div className="card-actions justify-center mt-2">
                    <button className="btn w-fit bg-[var(--text-primary)] border-0  text-white font-semibold">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;