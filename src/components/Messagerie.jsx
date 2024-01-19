import React, { useState } from "react";
import "../style/message.css";

export default function Messagerie() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêcher la soumission du formulaire

    // Ajouter le message saisi à la liste des messages
    setMessages([...messages, message]);

    // Réinitialiser la valeur du message
    setMessage('');
  };

  return (
    <form className="form"  onSubmit={handleSubmit}>
    <p className="paragraphe">Votre Conversation</p>
      <div className="activité-principale">
      <div className="conversation">
          {messages.map((message, index) => (
            <p className="message-utilisateur" key={index}>
            <img src="{image}" alt="Jean Claude"/>
            <br/> {message}
            </p>
          ))}
        </div>
        {/* ...autres éléments... */}
        <input
          className="texte"
          type="text"
          placeholder="Tapez votre message ici"
          value={message}
          onChange={(e) => setMessage(e.target.value)}

        />
        
        <button className="bouton" type="submit">Envoyer</button>
        
      </div>
    </form>
  );
}


// const Messagerie = people.map(person =>
//   <ul key={person.id}>
//     <p>
//       <b><img className="image"
//       src={getImageUrl(person)}
//       alt={person.name}
//     />{person.name}:</b>
//       {' ' + person + ' '}
//        {person.accomplishment}
//     </p>
    
//   <p><input type="text" placeholder="Type your message here" /><button type="submit">Envoyer</button> </p>
//   </ul>
// );

// return (
//   <form>
//   <article className="body--activity" >
//     <p className="title" >Messagerie Taakalo</p>
//     <p>{Messagerie}</p>
//   </article>
// </form>
// );
