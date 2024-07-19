import "../styles/SimilarProducts.scss"
import { Card } from "./ProductDetails/Card"

export const SimilarProducts =()=> {
    return (
        <>
        <h3 className="similar_products_h3">Похожие товары</h3>
        <article className="similar_products">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </article>
        </>
    )
}