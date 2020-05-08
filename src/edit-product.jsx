import React, { Component } from "react";
import { GetProductById, Edit, GetAllCategories } from "./services/products";
import { Link } from "react-router-dom";
class EditProduct extends Component {
  state = {
    product: {
      _id: "",
      name: "",
      description: "",
      price: "",
      discount: "",
      tags: [],
      category: {}
    },
    categories: []
  };
  async componentDidMount() {
    const id = this.props.match.params.id;
    const data = await GetProductById(id);
    console.log(data);
    this.setState({ product: data.product });
    console.log(this.state.product);
    const categories = await GetAllCategories();
    const filterdCategories = categories.filter(
      c => c.name !== this.state.product.category.name
    );
    this.setState({ categories: filterdCategories });
  }
  editProductHandler = e => {
    e.preventDefault();
    const {
      _id,
      name,
      description,
      price,
      discount,
      category
    } = this.state.product;
    const obj = { name, description, price, discount, category };
    const token = localStorage.getItem("token");
    console.log(obj);
    Edit(_id, obj, token);
    window.location.href = "/product-listing";
  };
  changeInputHandler = e => {
    const product = { ...this.state.product };
    product[e.target.name] = e.target.value;
    this.setState({ product });
  };
  render() {
    const {
      name,
      description,
      price,
      discount,
      category,
      tags
    } = this.state.product;
    const { categories } = this.state;
    //console.log(name, description, price, discount);
    return (
      <React.Fragment>
        <div className=" container">
          <form className="add-product" action="">
            <div className="add-product__images slider">
              <div className="add-product__image-actions">
                <div className="add-product__image-action">
                  <a href="#">
                    <i className="fas fa-plus-square"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-edit"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-trash-alt"></i>
                  </a>
                </div>
              </div>
              <div className="slider__items">
                <div
                  className="slider__item active"
                  style={{
                    backgroundImage: "url(img/products/product-grey-7.jpg)"
                  }}
                ></div>
                <div
                  className="slider__item"
                  style={{
                    backgroundImage: "url(img/products/product-grey-7.jpg)"
                  }}
                ></div>
                <div
                  className="slider__item"
                  style={{
                    backgroundImage: "url(img/products/product-grey-7.jpg)"
                  }}
                ></div>
              </div>
              <div className="slider__indicators">
                <span className="slider__indicator active"></span>
                <span className="slider__indicator"></span>
                <span className="slider__indicator"></span>
              </div>
            </div>
            <div className="add-product__data">
              <div className="form-controls">
                <section className="tabs">
                  <div className="tabs__headers">
                    <div className="tabs__header active">English</div>
                    <div className="tabs__header">Arabic</div>
                  </div>
                  <div className="tabs__bodies">
                    <div className="tabs__body active">
                      {/* {invalid} */}
                      <div className="form-group ">
                        <label htmlFor="">Name</label>
                        <input
                          onChange={this.changeInputHandler}
                          value={name}
                          className="form-control"
                          type="text"
                          name="name"
                          id=""
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Description</label>
                        <textarea
                          onChange={this.changeInputHandler}
                          value={description}
                          className="form-control"
                          name="description"
                          id="description"
                          cols="30"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="form-group">
                  <label htmlFor="">Price</label>
                  <input
                    onChange={this.changeInputHandler}
                    value={price}
                    className="form-control"
                    type="text"
                    name="price"
                    id=""
                  />
                </div>
                <div className="add-product__discount">
                  <div className="form-group">
                    <label htmlFor="">Discount</label>
                    <input
                      onChange={this.changeInputHandler}
                      value={discount}
                      className="form-control"
                      type="text"
                      name="discount"
                      id=""
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="">Category</label>
                  <select
                    onChange={this.changeInputHandler}
                    className="form-control"
                    name="category"
                    id=""
                  >
                    <option key={category.id}>{category.name}</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="add-product__actions">
                  <button className="btn btn--gray">Cancel</button>
                  <Link
                    to="/product-listing"
                    onClick={this.editProductHandler}
                    className="btn btn--primary"
                  >
                    Add
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default EditProduct;
