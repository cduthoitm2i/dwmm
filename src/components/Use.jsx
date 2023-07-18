import React, {useEffect, useState} from "react";
// On créer une fonction avec des props (property) pour afficher la date (il faut actualiser la page avec la touche F5)
export default function Use() {
    // useState("") est une fonction de React
    const [hiddenMessage, setHiddenMessage] = useState("");

    const handleClick = () => {
        // Dans l'écran F12, dans la console, quand on clic sur le bouton, le message s'affiche
        console.log('Tu as cliqué sur handleClick')
    }
    // On utilise la fonction useEffect pour afficher le message de hiddenMessage
    // Obligatoire pour faire des console.log
    useEffect(()=> {
        console.log('Message:', hiddenMessage)
    },[hiddenMessage])

    return (
        <div>
            <h1>Les uses</h1>
            <button onClick={handleClick}>handleClick</button><br/>
            Voir le message caché en cliquant&nbsp;: <button onClick={()=>{setHiddenMessage('Voici le message caché')}}>ici</button>
        </div>
    )
}