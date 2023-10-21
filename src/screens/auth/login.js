import React from 'react'
import { loginEndpoint } from "../../spotify";
import cover from "../../images/music-cloud.gif"
import "./login.css";

export default function Login() {
  return (
    <div className="login-page">
      <img
        src= {cover}
        alt="logo-spotify"
        className="logo"
      />
      <a href={loginEndpoint}>
        <div className="login-btn">LOG IN WITH SPOTIFY</div>
      </a>
    </div>
  )
}
