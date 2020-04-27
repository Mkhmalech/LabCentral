import * as React from 'react';
import { Table, Tr, Th, Td } from '../common/listStyle'
import { PopUp } from './popUps'
import { Dropallback } from './dropallback'
import {
    Container,
    ContainerNavigation,
    LinkNavigation,
    ContainerSearch,
    Button, Input,
    TitleTablePararameters,
    SpanTextButtonNouveu
} from '../common/settingStyle'
import './popUps.css'


export const Setting: React.FC<any> = () => {

    const [add, addCreateParams] = React.useState(false);

    // Navigation inside Parameters Table initialised by table "Ajouter Conge"
    const [tab, setTab] = React.useState("Ajouter Conge");


    const showTab = (tab: any) => {
        if (tab == "departement") setTab("Ajouter Departement")
        if (tab == "conge") setTab("Ajouter Jours Ferie")
        if (tab == "automates") setTab("Ajouter Conge")
        if (tab == "Jours Ferie") setTab("Ajouter Automates")
    }

    // END Navigation inside Parameters Table 

    const [formData, setData] = React.useState({
        text: ''
    })
    const {
        text
    } = formData;

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
        name: ''
    })
    const [formparamsJ, setFormDataJrF] = React.useState({
        jrname: ''
    })
    const { conge, duree, unite } = formparamsC;
    const { reference, marque, version } = formparamsA;
    const { name } = formparamsD;
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
            <input className="input_param" type="text" name="titre" placeholder="departement" value={name} onChange={e => onChangeDepartement(e)} />
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




    // settings data
    const [Departements, setDepartements] = React.useState([{ name: "biochimie" }])

    const [Congees, setCongees] = React.useState([
        { conge: "maternite", duree: "3", unite: "jrs" },
        { conge: "volantaire", duree: "10", unite: "jrs" }
    ])

    const [VacationDays, setVacationDays] = React.useState([
        { jrname: "la marche verte" },
        { jrname: "fete de l'independance" },
        { jrname: "revolution du roi et du peuple" }
    ])

    const [Automates, setAutomate] = React.useState( [
        { marque: "archetecte", reference: "8000-i", version: "2013" }
    ])


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


    const Parameters = [
        { title: "Ajouter Departement", headers: ["departement"], data: Departements },
        { title: "Ajouter Jours Ferie", headers: ["Jours Ferie"], data: Congees },
        { title: "Ajouter Conge", headers: ["Conge", "duree", "unite"], data: VacationDays },
        { title: "Ajouter Automates", headers: ["Marque", "refrerence", "version"], data: Automates }
    ]

    return (
        <React.Fragment>
            {add && <Dropallback />}
            {add && (
                <PopUp title={formData.text} canCancel canConfirm
                    onCancel={() => addCreateParams(!add)} onConfirm={(event: any) => { }/*  Add(event, text) */}>
                    {formData.text === "Ajouter Conge" && inputsConge}
                    {formData.text === "Ajouter Departement" && inputsDep}
                    {formData.text === "Ajouter Jours Ferie" && inputsJrf}
                    {formData.text === "Ajouter Automates" && inputsAutom}
                </PopUp>
            )}

            {/* Navigation Inside parameters setting */}
            <div style={{ width: "90%" }}>
                <TitleTablePararameters>Gestion Parameters</TitleTablePararameters>
            </div>

            <TabNavigation tabs={["conge", "departement", "automates", "Jours Ferie"]} onClick={showTab} />

            {/* Serach Container */}
            {/* <ContainerSearch>
                    <Input type="text" name="search" placeholder="Search..." />
                    <Button>+ Nouveau</Button>
                </ContainerSearch> */}

            {Parameters.map((parameter: any) => (
                <div style={{ width: "90%" }}>
                    {parameter.title === tab &&
                        <div key={parameter.title}>
                            <hr />
                            <ContainerSearch>
                                <Input type="text" name="search" placeholder="Search..." />
                                <Button onClick={() => displayPopUp(parameter.title)}>+ <SpanTextButtonNouveu >Nouveau</SpanTextButtonNouveu> </Button>
                            </ContainerSearch>
                            <hr />
                            <Table>
                                <thead>
                                    <Tr >
                                        {parameter.headers.map((header: any) => <Th key={header}>{header}</Th>)}
                                    </Tr>
                                </thead>

                                <tbody>{parameter.data.map((body: any) => <Tr key={body.name || body.conge || body.unite || body.jrname}>
                                    {body.name && <Td>{body.name}</Td>}
                                    {body.conge && <Td>{body.conge}</Td>}
                                    {body.jrname && <Td>{body.jrname}</Td>}
                                    {body.duree && <Td>{body.duree}</Td>}
                                    {body.unite && <Td>{body.unite}</Td>}
                                    {body.marque && <Td>{body.marque}</Td>}
                                    {body.reference && <Td>{body.reference}</Td>}
                                    {body.version && <Td>{body.version}</Td>}
                                </Tr>)}</tbody>
                            </Table>
                        </div>
                    }
                </div>
            ))}
        </React.Fragment>
    )
}

const TabNavigation = ({ tabs, onClick }: any) => (
    <ContainerNavigation>
        {
            tabs.map((tab: any) => (
                <LinkNavigation key={tab} onClick={e => onClick(e.currentTarget.textContent)}>{tab}</LinkNavigation>
            ))
        }
    </ContainerNavigation>
)

const ParaModalInput = ({ inputs, onChange }: any) => (
    <div className="container_inputs_Params">
        {
            inputs.map((input: any) => (
                <input className="input_param" type="text" placeholder="conge" onChange={onChange} />
            ))
        }
    </div>
)