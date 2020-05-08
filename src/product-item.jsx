import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductDetails from "./product-details";
class ProductItem extends Component {
  state = {};
  render() {
    const { name, price, discount, _id } = this.props.item;
    const { deleteHandler } = this.props;
    // console.log(item)
    return (
      <div className="item-medium-1">
        {discount !== 0 ? <div className="item-medium-1__alert">Sale</div> : ""}
        {/* <div className="item-medium-1__alert">Sale</div> */}
        <div
          className="item-medium-1__image image"
          style={{ backgroundImage: "url('img/products/product-grey-1.jpg')" }}
        >
          <a
            // onClick={() => addToCartHandler(item)}
            className="item-medium-1__action"
          >
            Add to Cart
          </a>
        </div>
        <a href="#">
          <h4>{name.charAt(0).toUpperCase() + name.slice(1)}</h4>
          <div className="flex-row">
            <div>
              {discount !== 0 && <del>${discount}</del>}

              <span className="lable">${price - discount}</span>
            </div>
          </div>
        </a>
        <div className="crud-actions">
          <Link to={`/product-details/${_id}`}>
            <i className="far fa-eye"></i>
          </Link>
          <Link to={`/edit-product/${_id}`}>
            <i className="fas fa-edit"></i>
          </Link>
          <Link onClick={() => deleteHandler(this.props.item)}>
            <i className="fas fa-trash-alt"></i>
          </Link>
        </div>
      </div>
    );
  }
}

export default ProductItem;
