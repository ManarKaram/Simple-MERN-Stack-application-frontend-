import axios from '../../node_modules/axios';
const RegisterApiEndPoint = "http://localhost:3000/users/register";

export const AddUser = async function (user) {
    const { data } = await axios.post(RegisterApiEndPoint, user);
    console.log(data)
    return data;
};


const LoginApiEndPoint = "http://localhost:3000/users/login";
export const LoginUser = async function (user) {
    const { data } = await axios.post(LoginApiEndPoint, user);
    //console.log(data)
    return data;

}