import React from 'react';
//importe le composant Userlist
import { Userlist } from './Userlist';
//Exporte la fonction Directory
export function Directory(props) {
  //renvoie une expression jsx et transfert au composant UserList un tableau usernames et recoit les informations de fonction de gest d'event onChoose et les appliques au gestionnaire onChoose du composant
  return (
    <div className="Directory">
      <h2>User directory</h2>
      <Userlist
        usernames={['dog', 'cat', 'komodo']}
        onChoose={props.onChoose}
      />
    </div>
  );
}