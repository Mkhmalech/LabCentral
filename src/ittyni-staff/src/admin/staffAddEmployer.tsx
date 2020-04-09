import * as React from 'react';
import { Link } from 'react-router-dom';



export const StaffAddEmployer : React.FC<any> = ({username}) =>{



    const [hidden, setHidden] = React.useState(true);

    const [departement, setDepartement] = React.useState('')

    const [departements, addDepartement] = React.useState([
        "Biochimie",
        "Hematologie",
        "Bacteriologie",
        "Serologie", 
    ])

    return(
        <div>
            <h1>Ajouter un nouveau Employee</h1>
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
                {departements.map(dep=><option>{dep}</option>)}
            </select>
            <input type="text" hidden={hidden} onChange={e=>{
                setDepartement(e.target.value);
            }}/><button onClick={()=>{              
                addDepartement([
                    ...departements,
                    departement
                ]);
                setHidden(!hidden);
            }} hidden={hidden}>ok</button>
            <button onClick={e=>setHidden(!hidden)} hidden={!hidden}>Ajouter Unite</button>
            </p>

            <h2> Les autorisations </h2>
            <hr/>
        </div>
    )
}