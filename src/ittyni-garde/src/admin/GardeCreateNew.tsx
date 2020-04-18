import * as React from 'react';
import { Calendar } from '../common/datepicker';
import { ModalContainer, ModalHeader, ModalHeaderTitle, ModalLayout, ModalClose, ModalContent, ModalFooter } from '../common/modal';
import { Shift } from '../controller/shift';
import { useSelector } from 'react-redux';

const shiftClass = new Shift();

export const CreateNew : React.FC<any> = ({close}) => {

    /**
     * user search a @constant{name : fetched from server} 
     * after enter @constant{day : instante state} or @constant{night : instant state}
     * @constant{pair : instante state} or @constant{impair : instante state} then 
     * @constant{startDate and endDate : instante state}
     * and click ok to dispatch all data to server 
     * that will update garde table
     */

    const [startDate, updateStartDate] = React.useState<any>();
    const [endDate, updateEndDate] = React.useState<any>();
    const Parameters = [
        { title: "list de garde du mois 05-2020", headers: ["Nom", "Prenom", "unite"], data: ["khamlech", "Mohammed", "Biochimie"] }
    ]
    return (
        <ModalLayout>
            <ModalContainer>
                <ModalHeader>
                    <ModalHeaderTitle>
                    <div><h3>Ajouter Garde :</h3></div>
                    <div>
                        <ModalClose onClick={close}>&times;</ModalClose>
                    </div>
                    </ModalHeaderTitle>
                </ModalHeader>
                <ModalContent>
                    <p>nom : <input style={{width : "80%"}}/></p>
                    <p>
                        <select style={{width : "100px"}}>
                            <option>Jours</option>
                            <option>Nuits</option>
                        </select>
                        <select style={{width : "100px"}} >
                            <option>pair</option>
                            <option>Impair</option>
                        </select>
                        <span>{startDate}</span>
                        <span>{endDate}</span>
                    </p>
                    <div>
                       de : <input type="date" onChange={(e: any)=>updateStartDate(e.target.value)}/> 
                       a : <input type="date" onChange={(e: any)=>updateEndDate(e.target.value)}/>
                    </div>
                </ModalContent>
                <ModalFooter><button onClick={e=>shiftClass.getShiftDate('Impair')}>valider</button></ModalFooter>
            </ModalContainer>

        </ModalLayout>
    )
}


const ShiftDays = () => {

    return (
        <div style={{ flex: "0 8 0", minWidth: "70%" }}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
        </div>
    )
}