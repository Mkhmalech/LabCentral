import * as React from 'react';
import { Table, Tr, Th, Td, FiltrationContainer, Filtration, All, Button, But } from '../common/listStyle'
import { useSelector } from 'react-redux';
import shiftDispatcher from '../dispatcher/shift'
import { CreateNew } from './GardeCreateNew';
import { PopUp } from '../../../commons/PopUp';
import { Dropallback } from '../../../commons/DropAllBack';

export const GardeViewAll = ({ shiftDate }: any) => {

    // global
    const actualDate = new Date();

    // get shifts State
    const shifts = useSelector((state: any) => state.garde.shifts) || [];

    // shifts data
    const dataform = useSelector((state: any) => state.garde.shiftsTable) || undefined;

    // selected month
    const [month, setMonth] = React.useState<string>(`${actualDate.getFullYear()}-0${actualDate.getMonth() + 1}`);

    // modal controll
    const [isOpen, openCloseModal] = React.useState(false);
    const [isOpenUp, openCloseModaUp] = React.useState(false);
    const [isOpenDel, openCloseModaDel] = React.useState(false);

    // filter by
    const [departement, setDepartement] = React.useState<string>('Biochimie')
    const filterByDeaprtement =(dep : string)=>{
        setDepartement(dep);
        shiftDispatcher.getMonthShifts(month, dep);
    }

    // update table 
    const updateTable = () =>{
        setTimeout(()=>shiftDispatcher.getMonthShifts(month, departement), 1000);
    }
    // paramters
    const Parameters = [
        {
            title: "list de garde du",
            headers: ["Nom", "Prenom", "unite", "Les Jours de Garde", "J/N", "E/S"],
            data: shifts
        }
    ]

    // table body
    var Listdata = (
        <tbody>
            {dataform && <>{
                dataform.days.map((gard: any) =>
                    <Tr key={gard.date}>
                        <Td>{gard.dayName}</Td>
                        <Td>{gard.date}</Td>
                        <Td>{gard.dayEmployer && <span>{gard.dayEmployer.firstName} {gard.dayEmployer.lastName}</span>}</Td>
                        <Td>{gard.nightEmployer && <span>{gard.nightEmployer.firstName} {gard.nightEmployer.lastName}</span>}</Td>
                        <Td>{dataform.departement}</Td>
                        <Td>
                            <button className="operation" onClick={() => {
                                openCloseModaUp(!isOpenUp)
                                // selectedGarde(gard.date)
                            }}>Editer</button>
                            <button className="operations" onClick={() => {
                                openCloseModaDel(!isOpenDel)
                            }}
                            >Supprimer</button>
                        </Td>
                    </Tr>
                )}</>}
            {!dataform && <Tr><Td>Loading.....</Td></Tr>}
        </tbody>
    )

    // change to another month
    const switchToMonth = async (m: string) => {
        await setMonth(m);
        return shiftDispatcher.getMonthShifts(m, departement);
    }

    // debug shifts data    
    console.log(dataform)

    // before anything check params
    React.useEffect(() => {
        if (shifts.length <= 0) shiftDispatcher.fetchShifts();
        if(!dataform && shifts.length > 0) shiftDispatcher.getMonthShifts(month, departement);
    }, [shifts, dataform])

    return (
        <React.Fragment>
            {isOpenDel && <Dropallback />}
            {isOpen && <Dropallback />}
            {isOpenUp && <Dropallback></Dropallback>}
            <div style={{ width: "90%" }}>

                {/* PopUp For Creating new shift */}
                {isOpen && <CreateNew close={() => openCloseModal(!isOpen)} 
                    shiftDate={shiftDate} fetchNewData={shiftDispatcher.fetchShifts} 
                    updateTable={updateTable}/>
                }

                {/* PopUp For Editing Garde selected */}
                {isOpenUp && <ModifyExistingShift close={() => openCloseModal(!isOpen)} />}

                {/* PopUp remove Garde selected */}
                {isOpenDel && <PopUp title="Confirmation" canCancel canConfirm onCancel={() => openCloseModaDel(!isOpenDel)}><div>Voulus-vous vraiment supprimer ?</div> </PopUp>}

                {/* shift list monitoring */}
                {Parameters.map((parameter: any) => (
                    <div key={parameter.title}>
                        <h2>{parameter.title} <input type="month" min="2020-05" value={month} onChange={e => switchToMonth(e.target.value)} /></h2>
                        <But onClick={(e) => openCloseModal(!isOpen)}>Creer Nouveau List de Gardes</But>
                        <hr />
                        <FiltrationContainer>
                            <Filtration>
                                <Button onClick={() => filterByDeaprtement('Biochimie')}>biochimie</Button>
                                <Button  onClick={() => filterByDeaprtement('Bacteriologie')}>bacteriologie</Button>
                                <Button onClick={() => filterByDeaprtement("Hematologie")}>Hemtologie</Button>
                            </Filtration>

                            <All>
                                <a href={shiftDispatcher.getXlsFile(dataform)} download={`${month}.xls`}>Export</a>
                            </All>
                        </FiltrationContainer>

                        <Table>
                            <thead>
                                <Tr>
                                    <Th></Th>
                                    <Th>Date</Th>
                                    <Th>Jour</Th>
                                    <Th>Nuit</Th>
                                    <Th>Unite</Th>
                                    <Th>Operations</Th>
                                </Tr>
                            </thead>
                            {Listdata}
                        </Table>
                        <hr />
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

// modify shift
const ModifyExistingShift: React.FC<any> = ({ close }) => (
    <PopUp title="Modification de la garde" canCancel canConfirm onCancel={() => close()} >
        <div className="form_wrapper">
            <div className="form_container">
                <div className="row clearfix">
                    <div className="col_half" style={{ marginBottom: "10px", width: "100%" }}>
                        <div className="select" style={{ width: "100%" }}>
                            <select id="slct">
                                <option value="L">Lundi</option>
                                <option value="MA">Mardi</option>
                                <option value="M">Mercredi</option>
                                <option value="J">Jeudi</option>
                                <option value="V">Vendredi</option>
                                <option value="S">Samedi</option>
                                <option value="D">Dimanche</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col_half" style={{ marginBottom: "10px" }}>
                        <div className="input_field">
                            <input type="text" name="jour" />
                        </div>
                    </div>
                    <div className="col_half">
                        <div className="input_field">
                            <input type="text" name="nuit" />
                        </div>
                    </div>
                </div>

                <div className="row clearfix">
                    <div className="col_half">
                        <div className="input_field">
                            <input type="date" name="date" />
                        </div>
                    </div>
                    <div className="col_half" style={{ marginBottom: "10px" }}>
                        <div className="select" style={{ width: "100%" }}>
                            <select id="slct" >
                                <option value="biochimie">biochimie</option>
                                <option value="Hematologie">hematologie</option>
                                <option value="bacteriologie">bacteriologie</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </PopUp>
)

const Modify = () =>
    <svg height="10pt"
        viewBox="-15 -15 484.00019 484"
        width="10pt"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="m401.648438 18.234375c-24.394532-24.351563-63.898438-24.351563-88.292969 0l-22.101563 22.222656-235.269531 235.144531-.5.503907c-.121094.121093-.121094.25-.25.25-.25.375-.625.746093-.871094 1.121093 0 .125-.128906.125-.128906.25-.25.375-.371094.625-.625 1-.121094.125-.121094.246094-.246094.375-.125.375-.25.625-.378906 1 0 .121094-.121094.121094-.121094.25l-52.199219 156.96875c-1.53125 4.46875-.367187 9.417969 2.996094 12.734376 2.363282 2.332031 5.550782 3.636718 8.867188 3.625 1.355468-.023438 2.699218-.234376 3.996094-.625l156.847656-52.324219c.121094 0 .121094 0 .25-.121094.394531-.117187.773437-.285156 1.121094-.503906.097656-.011719.183593-.054688.253906-.121094.371094-.25.871094-.503906 1.246094-.753906.371093-.246094.75-.621094 1.125-.871094.125-.128906.246093-.128906.246093-.25.128907-.125.378907-.246094.503907-.5l257.371093-257.371094c24.351563-24.394531 24.351563-63.898437 0-88.289062zm-232.273438 353.148437-86.914062-86.910156 217.535156-217.535156 86.914062 86.910156zm-99.15625-63.808593 75.929688 75.925781-114.015626 37.960938zm347.664062-184.820313-13.238281 13.363282-86.917969-86.917969 13.367188-13.359375c14.621094-14.609375 38.320312-14.609375 52.945312 0l33.964844 33.964844c14.511719 14.6875 14.457032 38.332031-.121094 52.949218zm0 0" />
    </svg>

const Delete = ({ onClick }: any) =>
    <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="10pt"
        height="10pt"
        onClick={onClick}
        x="0px" y="0px" viewBox="0 0 512 512">
        <g>
            <path d="M498.344,407.68L348.16,255.787l151.893-151.893C508.587,95.36,512,85.12,512,74.88c0-10.24-3.413-20.48-11.947-27.307
                        l-35.84-35.84c-15.36-15.36-40.96-15.36-56.32,0L256,163.627L104.106,11.733c-15.36-15.36-40.96-15.36-56.32,0l-35.84,35.84
                        C5.12,54.4,0,64.64,0,74.88s5.12,20.48,11.947,29.013L163.84,255.787L11.946,407.68c-15.36,15.36-15.36,40.96,0,56.32l35.84,35.84
                        c15.36,15.36,40.96,15.36,56.32,0l151.893-151.893L407.891,499.84c6.827,6.827,17.067,11.947,27.307,11.947
                        c10.24,0,20.48-3.413,27.307-11.947l35.84-35.84c6.827-6.827,11.947-17.067,11.947-29.014
                        C510.291,424.746,506.878,414.506,498.344,407.68z M476.16,440.107l-35.84,35.84c-3.413,3.413-5.12,3.413-8.534,0l-163.84-163.84
                        c-1.706-3.413-6.827-5.12-11.946-5.12s-8.534,1.707-11.946,5.12l-163.84,163.84c-3.413,3.413-5.12,3.413-8.534,0l-35.84-35.84
                        c-1.706-1.707-1.706-5.12,0-8.534l163.84-163.84c3.413-3.413,5.12-6.827,5.12-11.946c0-5.12-1.707-8.534-5.12-11.947L35.84,80
                        c-1.706-1.706-1.706-3.413-1.706-5.12s0-3.413,1.706-3.413l35.84-35.84c3.413-3.413,5.12-3.413,8.534,0l163.84,163.84
                        c6.827,6.827,17.067,6.827,23.893,0l163.84-163.84c3.413-3.413,5.12-3.413,8.534,0l35.84,35.84
                        c1.706,1.706,1.706,3.413,1.706,3.413c0,1.706,0,3.413-1.707,3.413l-163.84,163.84c-6.827,6.827-6.827,17.067,0,23.893
                        l163.84,163.84c1.707,1.707,1.707,3.413,1.707,3.413C477.867,436.693,477.867,438.4,476.16,440.107z" />
        </g>
    </svg>