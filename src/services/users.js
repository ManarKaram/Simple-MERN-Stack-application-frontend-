import axios from '../../node_modules/axios';
const RegisterApiEndPoint = "https://e-commerce-web-application2020.herokuapp.com/users/register";

export const AddUser = async function (user) {
    const { data } = await axios.post(RegisterApiEndPoint, user);
    console.log(data)
    return data;
};


const LoginApiEndPoint = "https://e-commerce-web-application2020.herokuapp.com/users/login";
export const LoginUser = async function (user) {
    const { data } = await axios.post(LoginApiEndPoint, user);
    //console.log(data)
    return data;

}