import * as React from 'react'
import { Dropallback } from './dropallback'
import { PopUp } from './popUps'
import {
    Container,
    ContainerNavigation,
    LinkNavigation,
    TitleTablePararameters,
} from '../common/settingStyle'

export const SettingTabs = ({Parameters} : any) => {
    const [add, addCreateParams] = React.useState(false);
    const test = () => addCreateParams(!add);
    const [formData, setData] = React.useState({ text: '' })
    const { text } = formData;
    // Navigation inside Parameters Table initialised by table "Ajouter Conge"
    const [navigateValue, navigateParams] = React.useState({
        navigate: "Ajouter Conge"
    });

    const { navigate } = navigateValue;

    addCreateParams(!add)

    // operation title personalise
    const displayPopUp = (paramP: any) => {
        Parameters.map(param => {
            if (param.title === paramP) {
                { paramP && addCreateParams(!add) }
                setData({
                    text: !param.title ? '' : param.title
                })

            }
        })
    }

    const Add = (event: React.MouseEvent, id: string) => {
        event.preventDefault()
        // Use your functions controller
        if (id === "Ajouter Departement") {
            DataDep.push(formparamsD)
            console.log(DataDep)
        }

        if (id === "Ajouter Automates") {
            dataAutomate.push(formparamsA)
            console.log(dataAutomate)
        }

        if (id === "Ajouter Conge") {
            DataConge.push(formparamsC)
            console.log(DataConge)
        }

        if (id === "Ajouter Jours Ferie") {
            dataJrF.push()
            console.log(dataJrF)
        }

    }

    const [formparamsC, setFormDataConge] = React.useState({
        conge: '',
        duree: '',
        unite: ''
    })
    const [formparamsA, setFormDataAutom] = React.useState({
        reference: '',
        marque: '',
        version: ''
    })
    const [formparamsD, setFormDataDepar] = React.useState({
        titre: ''
    })
    const [formparamsJ, setFormDataJrF] = React.useState({
        jrname: ''
    })
    const { conge, duree, unite } = formparamsC;
    const { reference, marque, version } = formparamsA;
    const { titre } = formparamsD;
    const { jrname } = formparamsJ;


    const inputsConge = (
        <div className="container_inputs_Params">
            <input className="input_param" type="text" name="conge" placeholder="conge" value={conge} onChange={e => onChangeConge(e)} />
            <input className="input_param" type="text" name="duree" placeholder="duree" value={duree} onChange={e => onChangeConge(e)} />
            <input className="input_param" type="text" name="unite" placeholder="unite" value={unite} onChange={e => onChangeConge(e)} />
        </div>
    )

    const inputsDep = (
        <div className="container_inputs_Params">
            <input className="input_param" type="text" name="titre" placeholder="departement" value={titre} onChange={e => onChangeDepartement(e)} />
        </div>
    )

    const inputsJrf = (
        <div className="container_inputs_Params">
            <input className="input_param" type="text" name="jrname" placeholder="jour ferie" value={jrname} onChange={e => onChangeJrFerie(e)} />
        </div>
    )

    const inputsAutom = (
        <div className="container_inputs_Params">
            <input className="input_param" type="text" name="marque" placeholder="marque" value={marque} onChange={e => onChangeAutomates(e)} />
            <input className="input_param" type="text" name="reference" placeholder="reference" value={reference} onChange={e => onChangeAutomates(e)} />
            <input className="input_param" type="text" name="version" placeholder="version" value={version} onChange={e => onChangeAutomates(e)} />
        </div>
    )

    const onChangeConge = (e: any) => setFormDataConge({ ...formparamsC, [e.target.name]: e.target.value })
    const onChangeDepartement = (e: any) => setFormDataDepar({ ...formparamsD, [e.target.name]: e.target.value })
    const onChangeAutomates = (e: any) => setFormDataAutom({ ...formparamsA, [e.target.name]: e.target.value })
    const onChangeJrFerie = (e: any) => setFormDataJrF({ ...formparamsJ, [e.target.name]: e.target.value })

    const showDepartement = (event: React.MouseEvent) => {
        event.preventDefault()
        navigateParams({
            navigate: "Ajouter Departement"
        })
    }
    const showConge = () => {
        navigateParams({
            navigate: "Ajouter Conge"
        })
    }
    const showJrFirie = () => {
        navigateParams({
            navigate: "Ajouter Jours Ferie"
        })
    }
    const showAutomates = () => {
        navigateParams({
            navigate: "Ajouter Automates"
        })
    }

    return (
        <>
            {add && <Dropallback />}
            {add && <PopUp PopUpAppointment title={formData.text} canCancel canConfirm onCancel={() => test()} onConfirm={

                (event: any) => Add(event, text)

            }>
                <p style={{ fontWeight: 900, color: "#343a40" }}>{formData.text}</p>

                {formData.text === "Ajouter Conge" && inputsConge}
                {formData.text === "Ajouter Departement" && inputsDep}
                {formData.text === "Ajouter Jours Ferie" && inputsJrf}
                {formData.text === "Ajouter Automates" && inputsAutom}

            </PopUp>}

             {/* Navigation Inside parameters setting */}
             <div style={{ width: "90%" }}>
                <TitleTablePararameters>Gestion Parameters</TitleTablePararameters>
            </div>

            <ContainerNavigation>
                <LinkNavigation onClick={() => showConge()}>Conges</LinkNavigation>
                <LinkNavigation onClick={(event) => showDepartement(event)}>Departements</LinkNavigation>
                <LinkNavigation onClick={() => showJrFirie()}>Jours Ferie</LinkNavigation>
                <LinkNavigation onClick={() => showAutomates()}>Automates</LinkNavigation>
            </ContainerNavigation>
        </>

    )
}