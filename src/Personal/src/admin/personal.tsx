import * as React from "react";

interface Props {
  // status: PersonalStatus;
}

export const Personal: React.FunctionComponent<Props> = props => (
  <div>
    <h1>Personal page</h1>
    <div>
      <p>
        Civilite :{" "}
        <select>
          <option>Mr</option>
          <option>Mme</option>
        </select>
      </p>
      <p>
        Nom : <input />
        {"  "}
        Prenom : <input />
      </p>
      <p>
        PPR : <input />
        Date de Recrutement : <input />
      </p>
      <p>
        Unite: <input />
        Cadre :
        <select>
          <option>Satgiaire</option>
          <option>Technicien</option>
          <option>Resident</option>
          <option>Secretaire</option>
          <option>ATP</option>
          <option>Administrateur</option>
          <option>femme de menage</option>
        </select>
      </p>
      <p>
        <button style={{ width: "150px" }}>Enregistrer</button>
      </p>
      <hr />
      <h3>Historique</h3>
      
        <table>
          <thead>
            <tr>
              <th style={{ width: "25%" }}>Mois</th>
              <th style={{ width: "25%" }}>Annee</th>
              <th style={{ width: "50%" }}>La garde Travaillee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th style={{ width: "25%" }}>Janvier</th>
              <th style={{ width: "25%" }}>2020</th>
              <th style={{ width: "50%" }}>Nuit</th>
            </tr>
            <tr>
              <th style={{ width: "25%" }}>Decembre</th>
              <th style={{ width: "25%" }}>2019</th>
              <th style={{ width: "50%" }}>La Nuit</th>
            </tr>
            <tr>
              <th style={{ width: "25%" }}>Novembre</th>
              <th style={{ width: "25%" }}>2019</th>
              <th style={{ width: "50%" }}>Le Jour</th>
            </tr>
            <tr>
              <th style={{ width: "25%" }}>Novembre</th>
              <th style={{ width: "25%" }}>2019</th>
              <th style={{ width: "50%" }}>Normal</th>
            </tr>
          </tbody>
        </table>

    </div>
  </div>
);
