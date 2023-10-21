import React, { useEffect, useState } from "react";
import APIKit from '../../spotify';
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import './library.css';
import { useNavigate } from "react-router-dom";

export default function Library(){
    const [playlists, setPlaylists]= useState(null);
   useEffect(()=>{
    APIKit.get('me/playlists').then(function(response){
        setPlaylists(response.data.items);
        console.log(response.data.items[0].images[0].url);
    });
   }, []);
   const navigate= useNavigate();
   const playPlaylist= (id) =>{
    navigate("/player", {state:{id:id}});
// useNavigate is used to go to a new screen , we are taking ID here from the playlists 
   };
    return(
        <div className="screen-container">
            <div className="library-body">
            {playlists?.map((playlist)=>(
                <div className="playlist-card"
                key={playlist.id}
                onClick={() => playPlaylist(playlist.id)}>
                    <img
                      src={playlist.images[0].url}
                    className="playlist-image" alt="Playlist-Art"/>
                    <p className="playlist-title">{playlist.name}</p> 
                    <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
                    <div className="playlist-fade">
                    <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>

                    </div>
                    </div>
            ))}
            </div>
        </div>
    );
}

//for the images , there is a 0th element , each image has an url assiciated with it