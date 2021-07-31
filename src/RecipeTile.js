import React from 'react';
import "./RecipeTile.css";

export default function RecipeTile({recipe}) {
    return (
        //if image is not available, don't show that recipetile.
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)
        != null && (
        <div className="recipeTile" onClick={()=>{
            window.open(recipe["recipe"]["url"]);
        }}>
            <img className="recipeTile_img" src={recipe["recipe"]["image"]}/>
            <p className="recipeTile_name">{recipe["recipe"]["label"]}</p>
        </div>
        )
    )
}
