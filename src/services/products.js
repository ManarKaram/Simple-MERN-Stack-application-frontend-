import axios from "../../node_modules/axios";

const getAllProductsApiEndPoint = "https://e-commerce-web-application2020.herokuapp.com/products";
const addProductApiEndPoint = "http://localhost:3000/products/add-product";

export async function GetAllProducts(categoryId, search, sort, item) {
  const { data } = await axios.get(
    `${getAllProductsApiEndPoint}?category=${categoryId}&item=${search}&orderKey=${sort}&currentPage=${item}`
  );

  return data;
}

export async function GetProductById(id) {
  const { data } = await axios.get(`${getAllProductsApiEndPoint}/${id}`);
  console.log(data);
  return data;
}

export const Add = async function (item, token) {
  const { data } = await axios.post(addProductApiEndPoint, item, {
    headers: {
      Authorization: token
    }
  });
  console.log(data);
  return data;
};

export const Delete = async id => {
  const token = localStorage.getItem("token");
  const { data } = await axios.delete(
    `${getAllProductsApiEndPoint}/delete-product/${id}`,
    {
      headers: {
        Authorization: token
      }
    }
  );
  debugger;
  return data;
};

const getAllCategoriesApiEndPoint = "http://localhost:3000/categories";
export const GetAllCategories = async function () {
  const { data } = await axios.get(getAllCategoriesApiEndPoint);
  return data;
};

export async function Edit(id, item, token) {
  const { data } = await axios.patch(
    `${getAllProductsApiEndPoint}/edit-product/${id}`,
    item,
    {
      headers: {
        Authorization: token
      }
    }
  );
  console.log(data);
  return data;
}
