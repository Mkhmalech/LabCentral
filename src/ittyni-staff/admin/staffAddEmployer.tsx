import * as React from 'react';
import { Link } from 'react-router-dom';

export const StaffAddEmployer : React.FC<any> = ({username}) =>{

    const [hidden, setHidden] = React.useState(true);

    return(
        <div>
            <h1>Add New Employer</h1>
            <Link to={'./list-all-employers'} > Returner </Link>

            <hr/>

            {/* here our form of data
                we look for fullname, ppr, unite, status
            */}
            <h2>Informations Personelles</h2>
            <hr/>
            <p><label>nom </label> : <input type="text" /></p>
            <p><label>Prenom </label> : <input type="text" /></p>
            <p><label>PPR </label> : <input type="number" /></p>
            <p><label>Cadre </label> : <input type="text" /></p>
            <p><label>unite </label> : 
            <select>
                <option>Biochimie</option>
                <option>Hematologie</option>
                <option>Bacteriologie</option>
                <option>Serologie</option>
            </select>
            <input type="text" hidden={hidden}/>
            <button onClick={e=>setHidden(!hidden)}>{hidden ?" Ajouter Unite" : "Ok"}</button>
            </p>

            <h2> Les autorisations </h2>
            <hr/>
        </div>
    )
}