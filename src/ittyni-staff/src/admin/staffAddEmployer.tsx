import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

export const StaffAddEmployer : React.FC<any> = ({username}) =>{


    const [hidden, setHidden] = React.useState(false);

    const hiddenSetHidden = (event: React.MouseEvent) => {
        event.preventDefault()
        setHidden(!hidden)
    }

    const [departement, setDepartement] = React.useState('')

    const [departements, addDepartement] = React.useState([
        "Biochimie",
        "Hematologie",
        "Bacteriologie",
        "Serologie", 
    ])

    const addNewDepartement = (event: React.MouseEvent) => {
      event.preventDefault();

      if(departement)
      addDepartement([
        ...departements,
        departement
    ])
    setHidden(!hidden)
    }

    return(
        <div>
            <h1>Ajouter un nouveau Employee</h1>
            <Link to={'./list-all-employers'} > Returner </Link>

            <hr/>

            {/* here our form of data
                we look for fullname, ppr, unite, status
            */}
<div className="form_wrapper">
  <div className="form_container">
    <div className="title_container">
      <h2>Ajout de nouveau employer laboratoire</h2>
      <h3>Information de l'employer</h3>
    </div>
    <form>

    <div className="row clearfix">
        <div className="col_half">
          <label>Nom</label>
          <div className="input_field">
            <input type="text" name="nom" placeholder="Hicham"/>
          </div>
        </div>
        <div className="col_half">
          <label>Prenom</label>
          <div className="input_field">
            <input type="text" name="prenom" placeholder="Bendarbi" />
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col_half">
          <label>PPR</label>
          <div className="input_field">
            <input type="number" name="ppr" placeholder="ppr" /> 
          </div>
        </div>
        <div className="col_half">
          <label>Cardre</label>
          <div className="input_field">
            <input type="text" name="cardre" placeholder="cardre" pattern="[0-9]{10}" />
          </div>
        </div>
      </div>
           

        <div className="row clearfix">
                         <div className="col_half">
                            <label>Unite</label>
                            <div className="test">
                              <div className="select">
                              <select name="slct" id="slct">
                                  {departements.map(dep=><option>{dep}</option>)}
                              </select>
                              </div>
                              <div className="container_btn ">
                           {hidden && <button className="btns" onClick={event=> addNewDepartement(event)}>ok</button>}
                          {!hidden && <button className="btns" onClick={event=>hiddenSetHidden(event)}>Ajouter Unite</button>}
                           </div>
                          </div>
                          </div>
                     
       {hidden && <div className="col_half">
                <label>Nouvelle Unite</label>
                    <div className="input_field">
                 <input type="text"
                  onChange={e=>{setDepartement(e.target.value) }}/>
                </div>
                </div>
      }
           </div>
            </form>
            <input className="button" type="submit" value="Ajouter" />
  </div>
</div>
            <h2> Les autorisations </h2>
            <hr/>
        </div>
    )
}