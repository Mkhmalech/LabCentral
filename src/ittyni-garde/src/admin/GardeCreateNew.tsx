import * as React from 'react';
import { Calendar } from '../common/datepicker';
import { ModalContainer, ModalHeader, ModalHeaderTitle, ModalLayout, ModalClose, ModalContent, ModalFooter } from '../common/modal';
import styled from 'styled-components';

export const CreateNew = ({close}: any) => {

    const [month, updateMonth] = React.useState<any>();

    const Parameters = [
        { title: "list de garde du mois 05-2020", headers: ["Nom", "Prenom", "unite"], data: ["khamlech", "Mohammed", "Biochimie"] }
    ]
    console.log(month)
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
                        <select style={{width : "100px"}}>
                            <option>pair</option>
                            <option>Impair</option>
                        </select>
                    </p>
                    <p>
                        <Calendar getMonth={updateMonth}/>
                    </p>
                </ModalContent>
                <ModalFooter><button>valider</button></ModalFooter>
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