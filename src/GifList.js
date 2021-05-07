/*Programmer : Dana Shafiei
  code for : create list of gifs and return it to Home page
 */
import React from "react";
import GifItem from "./GifItem";


const GifList = (props) => {
    const gifitems = props.gifs.map((image) =>{
        return <GifItem key={image.id} gif={image} />
    });
    return(
        <div className="gif-list">{gifitems}</div>
    );

};
export default GifList;