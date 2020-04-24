import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import { TitleTablePararameters } from '../../../ittyni-labsetting/src/common/settingStyle';

export const StaffAddEmployer: React.FC<any> = ({ username }) => {

  // create fileds hook
  const [departement, setDepartement] = React.useState('')

  const [departements, addDepartement] = React.useState([
    "-",
    "Biochimie",
    "Hematologie",
    "Bacteriologie",
    "Serologie",
  ]);

  const [formEmploi, addEmploy] = React.useState({
    nom: '',
    prenom: '',
    unite: '',
    ppr: '',
    sex: ''
  })

  const {
    nom,
    prenom,
    unite,
    ppr,
    sex
  } = formEmploi



  const onChangeE = (e:any) => addEmploy({...formEmploi, [e.target.name]: e.target.value})
  
  // hide & show departement
  const [hidden, setHidden] = React.useState(false);
// Show and hide Input New Departement
  const hiddenSetHidden = (event: React.MouseEvent) => {
    event.preventDefault()
    setHidden(!hidden)
  }

  // Add new Employer
  const createEmployer = (event: React.MouseEvent) => {
    event.preventDefault()
    console.log(formEmploi)
  }

  // Add New departement 
  const addNewDepartement = (event: React.MouseEvent) => {
    event.preventDefault();

    if (departement)
      addDepartement([
        ...departements,
        departement
      ])
    setHidden(!hidden)
  }

  return (
<React.Fragment>
<div style={{width: "90%"}}>
           <TitleTablePararameters>
             Ajout de nouvelle Employer
           </TitleTablePararameters>
  <Link to={'./list-all-employers'} > {`<`}Retour </Link>
           <hr />
            </div>
           
<div className="form_wrapper">
  <div className="form_container">
    <div className="title_container">
      <h3>* Tous les chams sont requis</h3>
    </div>
    <form onSubmit={(event:any)=> createEmployer(event)}>
      <div className="row clearfix">
        <div className="col_half">
          <label>Nom</label>
          <div className="input_field">
            <input type="text" name="nom" value={nom} placeholder="*nom" onChange={(e:any)=> onChangeE(e)}/>
          </div>
        </div>
        <div className="col_half">
          <label>Prenom</label>
          <div className="input_field">
            <input type="text" name="prenom" value={prenom} placeholder="* prenom" onChange={(e:any)=> onChangeE(e)}/>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col_half">
          <label>PPR</label>
          <div className="input_field"> 
            <input type="number" name="ppr" value={ppr} placeholder="* 0" onChange={(e:any)=> onChangeE(e)}/>
          </div>
        </div>
        <div className="col_half">
          <label>Unite</label>
          {/* <div className="input_field">
            <input type="text" name="unite" placeholder="* Unite"/>
          </div> */}
                 <div className="test">
                   <FormFieldSelect listToChose={departements} name="unite" value={unite} onChange={(e:any)=> onChangeE(e)}/>
                  <div style={{width:"30%"}}>
                     {hidden && <button className="nouv_unite_btn" onClick={event => addNewDepartement(event)}>Confirmer</button>}
                    {!hidden && <button className="nouv_unite_btn" onClick={event => hiddenSetHidden(event)}>+ Nouvelle</button>}
                  </div>
                 </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col_half">
          <label>Sex</label>
              {/* <FormFieldSelect listToChose={["-","Mr", "Mme"]} onChange={(e)=>add_employerCivility(e.target.value)} width="100%" /> */}
              <FormFieldSelect listToChose={["-","Mr", "Mme"]} name="sex" value={sex} onChange={(e:any)=> onChangeE(e)} width="100%" />
        </div>
        {hidden && <div className="col_half">
          <label>Nouvelle Unite</label>
          <div className="input_field"> 
            <input  type="text" name="nunite" placeholder="* noveau Unite" onChange={e => { setDepartement(e.target.value) }} />
          </div>
        </div>}
      </div>
      <input className="button" type="submit" value="Sumbit" />
    </form>
  </div>
</div>
</React.Fragment>
)
}


interface FormFieldSelectProps {
  listToChose : any[]
  onChange ? : (e : any) => void
  width?: string
  value?: string
  name?: string
}

const FormFieldSelect: React.FC<FormFieldSelectProps> = ({listToChose, onChange , width, value, name}) => (
  <div className="select" style={{width}}>
    <select value={value} name={name} id="slct" onChange={onChange}>
      {listToChose.map(dep => <option>{dep}</option>)}
    </select>
  </div>
)
