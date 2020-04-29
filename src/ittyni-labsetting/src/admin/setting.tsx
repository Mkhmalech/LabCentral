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

import setting from '../dispatcher/setting'

import './popUps.css'
import { useSelector } from 'react-redux';


export const Setting: React.FC<any> = () => {

    // show & hide add new param 
    const [add, addCreateParams] = React.useState(false);

    // Navigation inside Parameters Table initialised by table "Ajouter Conge"
    const [tab, setTab] = React.useState("Ajouter Conge");

    const showTab = (tab: any) => {
        if (tab == "departement") {
            setDepartements([...departements])
            setTab("Ajouter Departement");
        }
        if (tab == "Jours Ferie") setTab("Ajouter Jours Ferie")
        if (tab == "conge") setTab("Ajouter Conge")
        if (tab == "automates") setTab("Ajouter Automates")
    }

    // settings data
    const [Departement, setDepartement] = React.useState<string>()
    const [Departements, setDepartements] = React.useState<any[]>([])
    const departements = useSelector((state: any) => state.setting.departements);

    // setting Leaves
    const [Congee, setCongee] = React.useState<string>();
    const [CongeDuration, setCongeDuration] = React.useState<string>();
    const [Congees, setCongees] = React.useState([]);
    const leaves = useSelector((state: any) => state.setting.leaves);

    // setting holidays
    const [VacationName, setVacationName] = React.useState<string>()
    const [VacationFrom, setVacationFrom] = React.useState<Date>()
    const [VacationTo, setVacationTo] = React.useState<Date>()
    const [VacationDays, setVacationDays] = React.useState<any[]>([])
    const holidays = useSelector((state: any) => state.setting.holidays);

    // setting automates
    const [AutomateBrand, setAutomateBrand] = React.useState<string>()
    const [AutomateAnalyser, setAutomateAnalyser] = React.useState<string>()
    const [AutomateYear, setAutomateYear] = React.useState<string>()
    const [Automates, setAutomates] = React.useState([])
    const automates = useSelector((state: any) => state.setting.automates);


    const Parameters = [
        // departement
        {
            title: "Ajouter Departement", headers: ["departement"],
            data: Departements, inputs: [{ field: "departement", onChange: setDepartement }],
            addSetting: () => setting.addDepartement(Departement)
        },
        // Holidays  
        {
            title: "Ajouter Jours Ferie", headers: ["Jours Feries"], data: VacationDays, inputs: [
                { field: "Jour Ferie", type: "text", onChange: setVacationName },
                { field: "date de debut", type: "date", onChange: setVacationFrom },
                { field: "date de fin", type: "date", onChange: setVacationTo },
            ],
            addSetting: () => setting.addHoliday({ holiday: VacationName, from: VacationFrom, to: VacationTo })
        },

        // Leave
        {
            title: "Ajouter Conge", headers: ["Conge", "duree", "unite"], data: Congees, inputs: [
                { field: "congee", type: "text", onChange: setCongee },
                { field: "duree du congee", type: "number", onChange: setCongeDuration }
            ],
            addSetting: () => setting.addHoliday({ leave: Congee, duration: CongeDuration })
        },

        // automate
        {
            title: "Ajouter Automates", headers: ["Marque", "Refrerence", "mise en fonction"], data: Automates, inputs: [
                { field: "marque automate", type: "text", onChange: setAutomateBrand },
                { field: "analyseur", type: "text", onChange: setAutomateAnalyser },
                { field: "anne de fonction", type: "text", onChange: setAutomateYear },
            ],
            addSetting: setting.addAutomate({ brand: AutomateBrand, analyzer: AutomateAnalyser, departement: AutomateYear })
        }
    ]

    // before anything fetch data first
    React.useEffect(() => {
        if (Departements.length <= 0) setting.fetchDepartement();
    }, [])

    return (
        <React.Fragment>
            {/* Navigation Inside parameters setting */}
            <div style={{ width: "90%" }}>
                <TitleTablePararameters>Gestion Parameters</TitleTablePararameters>
            </div>

            <TabNavigation tabs={["conge", "departement", "Jours Ferie", "automates"]} onClick={showTab} />

            {Parameters.map((parameter: any) => (
                <div style={{ width: "90%" }}>
                    {parameter.title === tab &&
                        <div key={parameter.title}>
                            {/* add parameter */}
                            {add &&
                                <ParametersModalCreateNew
                                    title={parameter.title} showHideModal={() => addCreateParams(!add)}
                                    inputs={parameter.inputs}
                                    addSetting={parameter.addSetting}
                                />
                            }
                            <hr />
                            <ContainerSearch>
                                <Input type="text" name="search" placeholder="Search..." />
                                <Button onClick={() => addCreateParams(!add)}>+ <SpanTextButtonNouveu >Nouveau</SpanTextButtonNouveu> </Button>
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

const ParametersModalCreateNew = ({ showHideModal, title, inputs, addSetting }: any) => (
    <PopUp title={title} canCancel canConfirm
        onCancel={showHideModal} onConfirm={addSetting}>
        <div className="container_inputs_Params">
            {
                inputs.map((input: any) => (
                    <input className="input_param" type={input.type}
                        placeholder={input.field} onChange={(e) => input.onChange(e.target.value)} />
                ))
            }
        </div>
    </PopUp>
)