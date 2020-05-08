import React, { Component } from "react";
import _ from "lodash";
import { GetAllProducts, Delete, GetAllCategories } from "./services/products";
import ProductItem from "./product-item";
import Pagination from "./pagination";
import { Link } from "react-router-dom";

class ProductListing extends Component {
  state = {
    products: [],
    currentPage: 1,
    pageSize: "",
    categories: [],
    productsLength: "",
    categoryId: "",
    search: "",
    sort: ""
  };
  async componentDidMount() {
    const data = await GetAllProducts(
      this.state.categoryId,
      this.state.search,
      this.state.sort,
      this.state.currentPage
    );
    console.log(data);
    let categories = await GetAllCategories();
    categories = [{ id: 0, name: "All" }, ...categories];
    this.setState({
      products: data.products,
      categories,
      pageSize: data.pageSize,
      productsLength: data.productsLength
    });
  }
  deleteHandler = async item => {
    console.log(item._id);
    debugger;
    let deletedItem = await Delete(item._id);
    console.log(deletedItem);
    window.location.href = "/product-listing";
  };
  pageChangeHandler = async item => {
    const data = await GetAllProducts(
      this.state.categoryId,
      this.state.search,
      this.state.sort,
      item
    );
    console.log(item);
    this.setState({
      products: data.products,
      currentPage: item,
      productsLength: data.productsLength
    });
  };
  searchHandler = async e => {
    // console.log("Search");
    const search = e.target.value;

    let data = await GetAllProducts(
      this.state.categoryId,
      search,
      this.state.sort,
      this.state.currentPage
    );

    this.setState({
      products: data.products,
      search,
      productsLength: data.productsLength
    });
  };
  categoryHandler = async id => {
    console.log("category clicked");
    console.log(id);
    let categoryId = this.state.categoryId;
    if (id === 0) {
      categoryId = "";
    } else {
      categoryId = id;
    }

    let data = await GetAllProducts(
      categoryId,
      this.state.search,
      this.state.sort,
      this.state.currentPage
    );
    this.setState({
      products: data.products,
      categoryId,
      productsLength: data.productsLength
    });
  };
  sortHandler = async e => {
    const sort = e.target.value;
    let data = await GetAllProducts(
      this.state.categoryId,
      this.state.search,
      sort,
      this.state.currentPage
    );
    this.setState({
      products: data.products,
      sort,
      productsLength: data.productsLength
    });
  };

  render() {
    let {
      products,
      currentPage,
      pageSize,
      searchedProduct,
      categories,
      productsLength
    } = this.state;
    console.log(products);
    const { addToCartHandler } = this.props;
    //Paginnation
    // const startIndex = (currentPage - 1) * pageSize;
    // const pageContent = _(products)
    //   .slice(startIndex)
    //   .take(pageSize)
    //   .value();

    return (
      <React.Fragment>
        <div className="container">
          {/* <!-- filters --> */}
          <section className="filters">
            {/* <!-- search box --> */}
            <div className="search-box">
              <input
                className="search-box__input"
                onChange={this.searchHandler}
                value={searchedProduct}
                placeholder="Search..."
                type="text"
                name="txt_search"
                id=""
              />
              <button type="submit" className="search-box__btn">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div>
              <h5>Categories</h5>
              <ul className="list list--vr-separator">
                {categories.map(item => (
                  <li className="link list__item" id={item.id} key={item.id}>
                    <i className="link__icon fas fa-angle-right"></i>
                    <a onClick={() => this.categoryHandler(item.id)}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/* <!-- Items --> */}
          <section className="item-listing">
            <div className="item-listing__tools">
              <select className="form-control" onChange={this.sortHandler}>
                <option value="">Default</option>
                <option value="lowPrice">Price low to high</option>
                <option value="highPrice">Price high to low</option>
                <option value="name">Name</option>
              </select>
              <a className="action-btn" href="#">
                <Link to="/add-product"> <i className="fas fa-plus"></i></Link>
              </a>
            </div>
            {/* <!-- items --> */}
            <div className="item-listing__items item-listing--3items">
              {/* <!-- medium item --> */}
              {products.map(item => (
                <ProductItem
                  deleteHandler={this.deleteHandler}
                  addToCartHandler={addToCartHandler}
                  item={item}
                  key={item._id}
                />
              ))}
            </div>
            {/* <!-- paging --> */}
            <Pagination
              count={productsLength}
              pageSize={pageSize}
              currentPage={currentPage}
              handlePageChange={this.pageChangeHandler}
            />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductListing;
