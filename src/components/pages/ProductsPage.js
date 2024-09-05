import React from "react";
import '../../App.css'
import ProductsHero from "../Products";
import ProductList from "../ProductList";
import Footer from "../Footer";

export default function ProductsPage() {
    return(
        <>
            <ProductsHero />
            <ProductList />
            <Footer />
        </>
    )
}