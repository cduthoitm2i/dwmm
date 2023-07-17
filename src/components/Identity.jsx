// Import obligatoire
import React from "react";
// On créer une fonction avec des props
export default function Identity(props) {

    return(
        <div>
            <h1>{props.name}</h1>
            <p>
                {props.bio}
            </p>
        </div>
    );
}