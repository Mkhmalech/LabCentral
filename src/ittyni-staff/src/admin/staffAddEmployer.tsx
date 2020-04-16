import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

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

  // add employer parameters
  const [employerFName, add_employerFName] = React.useState<PersonFirstName>()
  const [employerLName, add_employerLName] = React.useState<PersonLastName>()
  const [employerCivility, add_employerCivility] = React.useState<PersonCivility>()
  const [employerDepartement, add_employerDepartement] = React.useState<EmployerDepartement>()
  const [employerPPR, add_employerPPR] = React.useState<EmployerPPR>()

  // hide & show departement
  const [hidden, setHidden] = React.useState(false);

  const [employer, addEmployer] = React.useState<Employer>()

  // form data 
  const formData: FormFieldProps[] = [
    // @TODO add civilite dropdown Mr, Mme
    { label: "Nom", placeholder: "nom", changeHandler: add_employerLName },
    { label: "Prenom", placeholder: "Prenom", changeHandler: add_employerFName },
    { label: "PPR", placeholder: "ppr", changeHandler: add_employerPPR, type: "number" }
  ]



  const hiddenSetHidden = (event: React.MouseEvent) => {
    event.preventDefault()
    setHidden(!hidden)
  }



  const createEmployer = () => {
    console.log([
      employerFName,
      employerLName,
      employerCivility,
      employerDepartement, /* not working add default , changed value and fix it */
      employerPPR
    ])
  }

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
    <div>
      <h1>Ajouter un nouveau Employee</h1>
      <Link to={'./list-all-employers'} > Returner </Link>

      <hr />

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
              <FormFieldSelect listToChose={["-","Mr", "Mme"]} onChange={(e)=>add_employerCivility(e.target.value)} />
              {formData.map((field: FormFieldProps) =>
                <FormField {...field} />
              )}
            </div>
            <div className="row clearfix">
              <div className="col_half">
                <label>Unite</label>
                <div className="test">
                  <FormFieldSelect listToChose={departements} onChange={(e:any)=>add_employerDepartement(e.target.value)} />
                  <div className="container_btn ">
                    {hidden && <button className="btns" onClick={event => addNewDepartement(event)}>ok</button>}
                    {!hidden && <button className="btns" onClick={event => hiddenSetHidden(event)}>Ajouter Unite</button>}
                  </div>
                </div>
              </div>

              {hidden && <div className="col_half">
                <label>Nouvelle Unite</label>
                <div className="input_field">
                  <input type="text"
                    onChange={e => { setDepartement(e.target.value) }} />
                </div>
              </div>
              }
            </div>
          </form>
          <input className="button" type="submit" value="Ajouter" onClick={createEmployer} />
        </div>
      </div>
      <hr />
    </div>
  )
}

interface FormFieldProps {
  label: string
  placeholder: string
  name?: string
  type?: string
  changeHandler: (e: any) => void
}
const FormField: React.FC<FormFieldProps> = ({ type, label, placeholder, name, changeHandler }) => (
  <div className="col_half">
    <label>{label}</label>
    <div className="input_field">
      <input type={type} name={name} placeholder={placeholder} onChange={(e: any) => changeHandler(e.target.value)} />
    </div>
  </div>
)

interface FormFieldSelectProps {
  listToChose : any[]
  onChange ? : (e : any) => void
}

const FormFieldSelect: React.FC<FormFieldSelectProps> = ({listToChose, onChange }) => (
  <div className="select">
    <select name="slct" id="slct" onChange={onChange}>
      {listToChose.map(dep => <option>{dep}</option>)}
    </select>
  </div>
)