import React, { useState, useEffect }from 'react';
import Lookahead from '../lookahead/lookahead';
import Products from '../products/products';
import { Container, Row, Col } from 'react-bootstrap';

function Ingredientlookup() {
    const [ingredients, setIngredients] = useState(null);
    const [products, setProducts] = useState(null);
    let allProducts = [];

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/daily-harvest/opportunities/master/web-1/data/ingredients.json')
            .then(response => response.json())
            .then(ingredients => setIngredients(ingredients));
        fetch('https://raw.githubusercontent.com/daily-harvest/opportunities/master/web-1/data/products.json')
            .then(response => response.json())
            .then(products => {
                allProducts = products;
                setProducts(products);
            });
    }, []);

    function filterProducts(selected) {
        const ingredientIds = selected.map((ingredient) => {
            return ingredient.id;
        });
        function hasIngredients(product) {
            return ingredientIds.every(elem => product.ingredientIds.includes(elem));
        }
        const filteredProducts = allProducts.filter(hasIngredients);
        setProducts(filteredProducts);
    };

    return (
        <Container>
            <Row>
                <Col className='header'>
                    <h1>Daily Harvest</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Lookahead ingredients={ingredients} onChange={filterProducts} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Products products={products} />
                </Col>
            </Row>
        </Container>
    );
}

export default Ingredientlookup;