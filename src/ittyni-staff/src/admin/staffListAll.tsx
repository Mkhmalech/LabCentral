import * as React from 'react';
import { Link } from 'react-router-dom';
import { Staff } from '../controller/staff';
import {Table, Tr, Th, Td} from './listStyle';

export const StaffListALL : React.FC<any> = () =>{

    const staff = new Staff();

    React.useLayoutEffect(()=>{
        // staff.addNewEmployers({firstName : "mohammed", lastName : "khmalech", departement : "biochimie"})
    })

    return(
        <>
        <h1>List des Personelles de laboratoire CHU</h1>
        <Link to={'./add-new-employer'} >Ajouter Nouveau </Link>

        <hr/>
        
        <Table>
            <thead>
                <Tr>
                    <Th>nom</Th>
                    <Th>Prenom</Th>
                    <Th>PPR</Th>
                    <Th>unite</Th>
                </Tr>
            </thead>
            <tbody>
                
                <Tr>
                    <Td><Link to={`./update`}>khmalech</Link></Td>
                    <Td>Mohammed</Td>
                    <Td>1322222</Td>
                    <Td>Biochimie</Td>
                </Tr>
                
            </tbody>
        </Table>
        </>
    )
}
