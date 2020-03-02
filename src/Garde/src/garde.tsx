import * as React from "react";

interface Props {
  // status: PersonalStatus;
}

export const Garde: React.FunctionComponent<Props> = props => (
  <div>
    <h1>Garde</h1>
    <hr />
    <h3>Selectionner le mois</h3>
    <p>
      Mois :
      <select>
        <option>Janvier</option>
        <option>Fevrier</option>
        <option>Mars</option>
        <option>Avril</option>
        <option>Mai</option>
        <option>Juin</option>
        <option>Juillet</option>
        <option>Aout</option>
        <option>Septembre</option>
        <option>Octobre</option>
        <option>Decembre</option>
      </select>
      Annee : <input />
    </p>
    <hr />
    <h3>List de Nuit</h3>
    <div>
      <p>
        Technicien des Jours Pairs : <input onChange={e=>{console.log(e.target)}}/>
      </p>

      <p>
        Technicien des Jours Impairs : <input />
      </p>
    </div>

    <h3>List de Jour</h3>
    <div>
      <p>
        Technicien des Jours Pairs : <input />
      </p>

      <p>
        Technicien des Jours Impairs : <input />
      </p>
    </div>
    <p>
      <button>Valider</button>
    </p>
  </div>
);
