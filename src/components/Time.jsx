// Import obligatoire
import React from "react";
// On créer une fonction avec des props (property) pour afficher la date (il faut actualiser la page avec la touche F5)
export default function Time(props) {

    return(
        <div>
            <p>
                Il est {props.date.toLocaleString()}
            </p>
        </div>
    );
}