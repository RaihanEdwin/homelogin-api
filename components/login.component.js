import React, { Component, useState } from "react";
import "./login.css"
import { Link } from "react-router-dom";
import axios from "axios"



// function login(){


//     console.warn(email, password)
    
// }

const Singin=()=>{
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    console.log(email)
    console.log(password)
    const [token, setToken]=useState("")

    const handleSubmit = (e) => {
        e.preventDefault();      
        axios
            .post("https://tasklogin.herokuapp.com/api/login", {
                username: email,
                password: password,
            })
            .then((Response) => {
                console.log(Response)
                setToken(Response.data.access_token)
                window.location = "/";
            })
            .catch((error) => {
                console.log(error)
            });
    };
    console.log(token)
        return (
        <div className="auth-wrapper">
            <div className="auth-inner">
            <form onSubmit={handleSubmit}>
                <h5 className="masuk">Silahkan masuk ke akun Anda</h5>
                <div className="form-group">
                    <label className="emailpass">Email</label>
                    <input type="text" className="form-control" placeholder="Masukan Email Anda" 
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label className="emailpass">Password</label>
                    <input type="password" className="form-control" placeholder="Masukan Password Anda" 
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <p className="forgot-password text-right">
                    <a className="lupapass" href="#">Lupa password?</a>
                </p>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Masuk</button>
                <div className="blm">Belum punya akun?&#160;&#160;&#160;<a href="#" className="daftar">Daftar sekarang →</a></div>              
            </form>
            </div>
        </div>

        );
    }
export default Singin;
