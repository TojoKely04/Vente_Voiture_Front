import React from "react";
import '../Styles/Content.css';

const ContentMarque = () => {
    return (
        <div className="body--activity">
            <div className="">
                <h1 className="ajout--title"> Ajouter Marque </h1>
                <p> Marque : <input type="text" name="InsertMarque" id="" /> </p>
            </div>

            <div className="">
            <h1 className="list--title">  Liste Marque </h1>
                <table>
                    <tr>
                        <td> Nom </td>
                        <td> Action </td>
                    </tr>
                    <tr>
                        <td> Nom Marque </td>
                        <td> <a href="#">Modifier</a> </td>
                        <td> <a href="#">Supprimer</a> </td>
                    </tr>
                </table>  
            </div>
                
            </div>
    )
}

export default ContentMarque;