import React from "react";
import '../Styles/Content.css';

const ContentCategorie = () => {
    return (
        <div className="body--activity">
            <div className="">
                <h1 className="ajout--title"> Ajouter categorie </h1>
                <p> Categorie : <input type="text" name="InsertCategorie" id="" /> </p>
            </div>

            <div className="">
            <h1 className="list--title">  Liste Categorie </h1>
                <table>
                    <tr>
                        <td> Nom </td>
                        <td> Action </td>
                    </tr>
                    <tr>
                        <td> Nom Categorie </td>
                        <td> <a href="#">Modifier</a> </td>
                        <td> <a href="#">Supprimer</a> </td>
                    </tr>
                </table>  
            </div>
                
            </div>
    )
}

export default ContentCategorie;