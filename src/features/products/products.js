import React from 'react';

class Products extends React.Component {

    render() {
        const { products } = this.props;
        return (
            <div className='Products'>
                <h4>Products</h4>
                {products ?(
                    products.map(product =>
                            <div className='Products--Product'>
                                <p className='Products--Product-title'>{product.name}</p>
                            </div>
                        )
                ):(
                    <p>Loading...</p>
                )}
            </div>
        );
    }
}

export default Products;