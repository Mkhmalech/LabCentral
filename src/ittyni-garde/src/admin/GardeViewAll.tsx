import * as React from 'react';
import { Table, Tr, Th, Td } from '../common/listStyle'
import { Dropallback } from '../../../commons/DropAllBack';
import { Shift } from '../controller/shift';
import './gardeStyle.css';
import { PopUp } from '../../../commons/PopUp';

const shiftClass = new Shift();
export const GardeViewAll = ({ shiftDate }: any) => {
    const [isOpen, openCloseModal] = React.useState(false)
    const [startDate, updateStartDate] = React.useState<any>();
    const [endDate, updateEndDate] = React.useState<any>();
    const test = () => openCloseModal(!isOpen)
    const Parameters = [
        {
            title: "list de garde du mois 05-2020",
            headers: ["Nom", "Prenom", "unite", "Les Jours de Garde", "J/N", "E/S"],
            data: ["khamlech", "Mohammed", "Biochimie", "1 - 3 - 5 - 7", "J", <div><Delete /> - <Modify /></div>]
        }
    ]

    return (
        <React.Fragment>
             {/* {isOpen && <CreateNew close={() => openCloseModal(!isOpen)} shiftDate={shiftDate} />} */}
             {isOpen && <Dropallback />}
            {isOpen && <PopUp title="Ajouter Garde" canCancel canConfirm onCancel={() => test()} onClick={(e:any)=>shiftClass.getShiftDate('Impair')}>
            <div className="form_wrapper">
      <div className="form_container">
      <div className="row clearfix">
      <div className="col_half" style={{width:"100%"}}>
            <div className="input_field">
                <input type="text" name="nom"  placeholder="Recherche Par Filtrage personnel..."/>
            </div>
      </div>
      </div>
    <div className="row clearfix">
        <div className="col_half" style={{marginBottom: "10px"}}>
            <div className="input_field">
                <input type="date" name="nom"  placeholder="*nom" />
            </div>
        </div>
        <div className="col_half">
           <div className="input_field">
                <input type="date" name="prenom"  placeholder="* prenom" />
            </div>
        </div>
    </div>  
     
      <div className="row clearfix">
        <div className="col_half" style={{marginBottom: "10px"}}>
      <div className="select" style={{width:"100%"}}>
    <select id="slct" >
    <option>Jours</option>
    <option>Nuits</option>
    </select>
  </div>
  </div>
  <div className="col_half">
  <div className="select" style={{width:"100%"}}>
    <select id="slct" >
    <option>Pair</option>
    <option>Impair</option>
    </select>
    </div>
      </div>
  </div>
      </div>
      </div>
            </PopUp>}
       
        <div style={{width: "90%"}}>
            {Parameters.map((parameter: any) => (
                <div key={parameter.title}>
                    <h1>{parameter.title}</h1>
                    <a onClick={(e) => openCloseModal(!isOpen)}>Creer Nouveau List de Gardes</a>
                    <hr />

                    <Table>
                        <thead>
                            <Tr >
                                {parameter.headers.map((header: any) => <Th key={header}>{header}</Th>)}
                            </Tr>
                        </thead>
                        <tbody><Tr>{parameter.data.map((body: any) => <Td>{body}</Td>)}</Tr></tbody>
                    </Table>

                    <hr />

                </div>
            ))}
           
        </div>
        </React.Fragment>
    )
}

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