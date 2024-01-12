import React from "react";
import '../Styles/Content.css';

const ContentBoiteVitesse = () => {
    return (
        <div className="body--activity">
            <div className="">
                <h1 className="ajout--title"> Ajouter Boite de Vitesse </h1>
                <p> Boite de vitesse : <input type="text" name="InsertMarque" id="" /> </p>
            </div>

            <div className="">
            <h1 className="list--title">  Liste Boite de vitesse </h1>
                <table>
                    <tr>
                        <td> Nom </td>
                        <td> Action </td>
                    </tr>
                    <tr>
                        <td> Nom Boite de vitesse </td>
                        <td> <a href="#">Modifier</a> </td>
                        <td> <a href="#">Supprimer</a> </td>
                    </tr>
                </table>  
            </div>
                
            </div>
    )
}

export default ContentBoiteVitesse;