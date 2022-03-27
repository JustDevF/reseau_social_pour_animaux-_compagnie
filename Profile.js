import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
//importer le composant Userlist
import { Userlist } from './Userlist';
//Exporter le composant
export class Profile extends React.Component {
  //Fonction de montage 1
  //Le constructeur
  constructor(props){
    super(props);
  //Etat de composaant
  this.state = {userData: null};
  }

   //1. Définit état de userData  sur null pendant le chargement des données
  //2. Récupère les données utilisateur avec fetchUserData 
  loadUserData(){
    this.setState({userData: null});
    this.fetchID = fetchUserData(this.props.username, (userData) => {
  this.setState({ userData });
});   
  }
  //Montage 2
  //appeller la f loadUserData au méthode de cycle de vie de montage  
  componentDidMount(){
    this.loadUserData();
  }
  
  render() {
    //Initialiser la var isLoading sur la valeur booléen userdata
    const isLoading = this.state.userData  === null ? true : false ;
    //Initialiser la var name sur la valeur de l'attribut name propriété de l'attribut objet userData de l'objet state
    const name = isLoading ? 'Loading...' : this.state.userData.name;
    //Initialiser la var bio sur la valeur de l'attribut bio propriété de l'attribut objet userData de l'objet state
    const bio = isLoading ? 'Loading...' : this.state.userData.bio;
    //Initialiser la var friends sur la valeur de l'attribut name propriété de l'attribut objet userData de l'objet state
    const friends = isLoading ? [] : this.state.userData.friends;
    let className = 'Profile';
    if (isLoading) {
      className += ' loading';
    }
    //f rendu renvoie une élément jsx de type html 
    //échange des informations avec le composant Userlis
    //mettre à jour la photo de profil de l'utilisateur à condition que la var isLoading ait une valeur false 
    return (
      <div className={className}>
        <div className="profile-picture">{!isLoading && (
          <img src={this.state.userData.profilePictureUrl} alt="" />
        )} </div>
        <div className="profile-body">
          <h2>{name}</h2>
          <h3>@{this.props.username}</h3>
          <p>{bio}</p>
          <h3>My friends</h3>
          <Userlist usernames={friends} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }
  //Fonction de misee à jour
  //Annulez la récupération en cours de donnée
  //Appelez à this.loadUserData(
  componentDidUpdate(prevProps){
    if (this.props.username !== prevProps.username){
      cancelFetch(this.fetchID);
      this.loadUserData();
    }
  }
  //Fonction de démontage 
  //annuler l'opération de récupération de données 
  componentWillUnmount(){
    cancelFetch(this.fetchID);
  }
}