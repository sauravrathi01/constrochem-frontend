import React from "react";
import { useParams } from "react-router-dom";
import categoryImages from "../data/CategoryImages";
import { useEffect, useState } from "react";
import api from "../api/axios";

import ProductData from "../data/ProductData";
import "../styles/product.css";


const ProductCategoryPage = () => {
  const { category } = useParams();
  const categoryName = category.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  const heroBg = categoryImages[category] || "/default-bg.jpg";
  const productList = ProductData[category] || []; 

  return (
    <>
      {/* Dynamic Hero */}
      <section
        className="hero-section"
        style={{
          height: "360px",
          backgroundImage: `url(${heroBg})`,
          // backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <h1 className="text-white fw-bold">{categoryName}</h1>
          <h4 className="text-white-50">Explore high-quality {categoryName} solutions</h4>
        </div>
      </section>

      {/* Products Grid */}
    <div className="container py-5">
  <div className="row g-4 justify-content-center">
    {productList.length === 0 && (
      <p className="text-muted">No products available in this category.</p>
    )}

    {productList.map((p, i) => (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={i}>
  <div className="product-card shadow-sm">

    <div className="product-img-wrapper text-center">
      <img src={p.img} className="product-img" alt={p.name} />
    </div>

    <div className="product-body">
      <h5 className="product-title">{p.name}</h5>
      <p className="product-desc">{p.desc}</p>
    </div>

  </div>
</div>

    ))}
  </div>
</div>

    </>
  );
};

export default ProductCategoryPage;
