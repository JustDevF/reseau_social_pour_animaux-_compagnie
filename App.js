import React from 'react';
import ReactDOM from 'react-dom';
//importe le composant Profile
import { Profile } from './Profile';
//importe le composant Directory
import { Directory } from './Directory';
//Composant 
class App extends React.Component {
  //Fonction de montage 1
  //le constructeur
  constructor(props) {
    super(props);
    //Etat de composant
    this.state = {
      currentUsername: null,
    };
    ///rajouter la fonction handleChoose, et handleReturnToDirectoryClick au constructeur
    this.handleChoose = this.handleChoose.bind(this);
    this.handleReturnToDirectoryClick = this.handleReturnToDirectoryClick.bind(
      this
    );
  }
  //Fonction gestionnaire d'event
  //prend un username en param
  //met à jour l'état de l'attribut currentUser du composant App
  handleChoose(newUsername) {
    this.setState({ currentUsername: newUsername });
  }

  //Fonction gestionnaire d'event
  //réinitialise l'état de l'attribut de composant courant à ses propriétés d'origines
  handleReturnToDirectoryClick() {
    this.setState({ currentUsername: null });
  }

//F de rendu 

  render() {
    let body;
    //Condition : Si l'état de l'att de comp actuel renvoie true 
    //il initialise la var body avec les informations du composant profiles 
    if (this.state.currentUsername) {
      body = (
        <Profile
          username={this.state.currentUsername}
          onChoose={this.handleChoose}
        />
      );
    } else {//sinon il initialise la var body avec le composant directory en renvoie la fonction de gest d'event handleChoose
      body = <Directory onChoose={this.handleChoose} />;
    }
    //renvoie un élément jsx de type html 
    //affiche l'info de username actuel comme titre 
    //renvoie  un bouton conteant la fonction de gest d'event handleReturnToDirectoryClick permettant de retourner au composant Directory
    //dans le main il affiche 
    return (
      <div className="App">
        <header>
          <h1>PetBook</h1>

          <nav>
            {this.state.currentUsername && (
              <button onClick={this.handleReturnToDirectoryClick}>
                Return to directory
              </button>
            )}
          </nav>
        </header>

        <main>{body}</main>
      </div>
    );
  }
}
//Rendu
ReactDOM.render(<App />, document.getElementById('app'));