import React from 'react';
//Exporter le composant UserList
export class Userlist extends React.Component {
  //Fonction de montage 1
  //Le constructeur
  constructor(props) {
    super(props);
    //rajouter la fonction handleClick au constructeur
    this.handleClick = this.handleClick.bind(this);
  }
  //F de Gest d'event
  //permet d'attribuer le nom l'élément qui l'appel
  handleClick(event) {
    this.props.onChoose(event.target.dataset.username);
  }
//Fonction de montage 2
//renvoie un élement jsx de type html, transfert une fonction de gest d'event. affiche les informations récus par le composant Profile
//utilise le clé pour garder une trace de liste
//affiche les username
  render() {
    return (
      <ul>
        {this.props.usernames.map((username) => (
          <li key={username}>
            <button data-username={username} onClick={this.handleClick}>
              @{username}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}