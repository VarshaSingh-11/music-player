import React , {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setClientToken } from "../../spotify";
import Library from "../library";
import Login from "../auth/login";
import Feed from "../feed/feed";
import Trending from "../trending/trending";
import Player from "../player";
import Favorites from "../favorites";
import "./home.css";
import Sidebar from "../../components/sidebar";

export default function Home(){

    const [token, setToken]= useState("");
    useEffect(()=>{
        const token = window.localStorage.getItem("token");
        const hash = window.location.hash;
        window.location.hash = "";
        if (!token && hash) {
          const _token = hash.split("&")[0].split("=")[1];
          window.localStorage.setItem("token", _token);
          setToken(_token);
          setClientToken(_token);
        } else {
          setToken(token);
          setClientToken(token);
        }
      }, []);
    
      return !token ? (
        <Login />
      ) : (
        <Router>
      <div className="main-body">
       
         <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
           <Route path="/feed" element={<Feed />} />
           <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
           <Route path="/favorites" element={<Favorites />} />
         </Routes>

      </div>
    </Router> 

);
}
    // we have to take out the access token and store it into our local storage
    
    
        //gives us the location of current path
/* splitting the aceess token string after storing it in the local storage */
//if the token is not present it will take us to the login screen else to the main screen home. 
//useEffect -> if the token is not present , and hash is present -> then we need to spilt and everything
// if the token is already present , then we proceed
// then we clear it by window.location.hash = "" empty string