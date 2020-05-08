import React, { Component } from "react";
import { GetProductById } from "./services/products";
import qs from "query-string";
class ProductDetails extends Component {
  state = {
    product: {},
    category: ""
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const data = await GetProductById(id);
    this.setState({ product: data.product, category: data.category });
  }
  render() {
    let { product, category } = this.state;
    return (
      <React.Fragment>
        <div className="product-details container">
          <section className="product-details__main">
            {/* <!-- images slider --> */}
            <div className="slider">
              <div className="slider__items">
                <div
                  className="slider__item active"
                  style={{
                    backgroundImage: "url(/img/products/product-grey-7.jpg)"
                  }}
                ></div>
                <div
                  className="slider__item"
                  style={{
                    backgroundImage: "url(/img/products/product-grey-7.jpg)"
                  }}
                ></div>
                <div
                  className="slider__item"
                  style={{
                    backgroundImage: "url(/img/products/product-grey-7.jpg)"
                  }}
                ></div>
              </div>
              <div className="slider__indicators">
                <span className="slider__indicator active"></span>
                <span className="slider__indicator"></span>
                <span className="slider__indicator"></span>
              </div>
            </div>
            {/* <!-- product info --> */}
            <div className="product-details__info">
              <h1>{product.name}</h1>
              <div className="rating">
                <div className="rating__stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                {/* <div className="rating__data">2 reviews</div> */}
              </div>
              <div className="product-details__amount">${product.price}</div>
              <p className="product-details__desc">{product.description}</p>
              <div className="product-details__add">
                <div className="increment-control">
                  <a href="#" className="increment-control__action">
                    -
                  </a>
                  <input
                    type="text"
                    className="form-control"
                    title="Qty"
                    value="1"
                  />
                  <a href="#" className="increment-control__action">
                    +
                  </a>
                </div>
                <button href="#" className="btn btn--primary" disabled>
                  Add to cart
                </button>
              </div>
              <div className="product-details__meta">
                Category: {category}
                {/* <a rel="tag" href="#">
                  Accessories
                </a>
                ,{" "}
                <a rel="tag" href="#">
                  Bags
                </a> */}
                .
              </div>
            </div>
          </section>
          <section className="tabs">
            <div className="tabs__headers">
              <div className="tabs__header active">Description</div>
              <div className="tabs__header">Additional Information</div>
              <div className="tabs__header">Reviews (2)</div>
            </div>
            <div className="tabs__bodies">
              <div className="tabs__body active">
                <div className="product-details__desc">
                  <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Fusce sagittis, massa fringilla
                    consequat blandit, mauris ligula porta nisi, non tristique
                    enim sapien vel nisl. Suspendisse vestibulum lobortis
                    dapibus.
                  </p>
                  <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Fusce sagittis, massa fringilla
                    consequat blandit, mauris ligula porta nisi, non tristique
                    enim sapien vel nisl. Suspendisse vestibulum lobortis
                    dapibus. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia Curae;
                  </p>
                </div>
              </div>
              <div className="tabs__body ">tab2</div>
              <div className="tabs__body">tab3</div>
            </div>
          </section>
          <div className="separator"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
