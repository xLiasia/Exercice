import React from 'react';

class Info extends React.Component{
    constructor(props){
    super(props);
        this.state={
            nom:'Jourdain',
            prenom:'Justine',
            age:'20 ans',
        }
    }

    render(){
        return (
          <div>
            <p>Nom: {this.state.nom}</p>
            <p>Prénom: {this.state.prenom}</p>
            <p>Âge: {this.state.age}</p>

          </div>
        );
      }
}

export default Info;