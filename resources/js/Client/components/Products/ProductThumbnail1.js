import React, { Component } from 'react'
import './Products.scss'

class ProductThumbnail1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={`product-container column-${this.props.columns}`}>
                {this.props.data.map((item, i) => (
                    <div className="product-content">
                        <div className="image-wrap">
                            <a href="#">
                            <img src="https://keinabeauty.com/wp-content/uploads/2021/02/DSCF0891_1-500x500.jpg" alt="" />
                            </a>
                        </div>
                        <div className="text-wrap">
                            <div className="category">
                                <a href="#">Skin Care</a>
                            </div>
                            <h3 className="title">
                            <a className="hvr hvr-underline-reveal pb-1" href={`/product/${item.id}`}>
                                {item.name}
                            </a>
                            </h3>
                            <h4 className="price">Rp. {item.price}</h4>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default ProductThumbnail1;
