import React, { Component } from 'react';
import axios from './../node_modules/axios';

import { Link } from 'react-router-dom';
import { LoginUser } from './services/users'

class Login extends Component {
    state = {
        user: {
            email: "",
            password: ""
        },
        error: ""


    }
    loginHandler = async (e) => {
        e.preventDefault();
        console.log("login clicked");
        const { email, password } = this.state.user;
        const obj = { email, password };
        // const apiEndPoint = "http://localhost:3000/users/login";
        // let error = this.state.error;
        // 
        // const response = await axios.post(apiEndPoint, obj)
        //     .catch((err) => {
        //         if (err.response) {
        //             console.log(err.response.data.message);
        //             // console.log(err.response.status);
        //             // console.log(err.response.headers);
        //             error = error.response.data.message;
        //             this.setState({ error })
        //             alert(error);

        //         }
        //     });

        // if (response) {
        //     const { data } = response;
        //     localStorage.setItem("token", data.token);
        //     localStorage.setItem("user", JSON.stringify(data.user))
        //     this.props.history.push("/home")
        // }

        const data = await LoginUser(obj)
        if (data.user) {
            console.log("Logined")
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user))
            this.props.history.push("/home")
        } else {
            alert("Wrong username or password")
        }

    }
    changeInputHandler = e => {
        const user = { ...this.state.user }
        user[e.target.name] = e.target.value;
        this.setState({ user })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <form className="login">
                        <h4 className="login__header">
                            I'M A RETURNING CUSTOMER
            </h4>
                        <div className="form-group">
                            <label htmlFor="">Username or E-mail Address</label>
                            <input className="form-control" type="text" name="email" id=""
                                onChange={this.changeInputHandler} />
                        </div>
                        <div className="form-group login__Password">
                            <a href="#" className="login__forget-password">(Forget Password?)</a>
                            <label htmlFor="">Password</label>
                            <input className="form-control" type="text" name="password" id=""
                                onChange={this.changeInputHandler} />
                        </div>
                        <div className="login__remember-me">
                            <div className="form-group__checkbox"><input type="checkbox" name="" id="" />
                                <span>Remember Me</span>
                            </div>
                            <div className="add-product__actions">
                                <button className="btn btn--gray">Cancel</button>
                                <button className="btn btn--primary"
                                    onClick={this.loginHandler}>Login</button>
                            </div>
                        </div>
                        <Link to="/register" className="login__register-now">Register Now</Link>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;