import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Staff } from '../controller/staff';

export const StaffListALL : React.FC<any> = () =>{

    const staff = new Staff();

    React.useLayoutEffect(()=>{
        staff.addNewEmployers({firstName : "mohammed", lastName : "khmalech", departement : "biochimie"})
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

const Table = styled('table')`
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    border-spacing: 0;
    min-width: 100%;
    margin-top: 50px;
`

const Tr = styled('tr')`
    border-bottom: 1px solid #ccc;
`

const Th = styled('th')`
    background-color: #F1F5F8;
    border-bottom: 2px solid #ccc;
    font-size: 12px;
    padding: 10px;
    text-transform: uppercase;
    text-align: left;
`

const Td = styled('td')`
    background-color: #fff;
    border: 0;
    border-bottom: 1px solid #ccc;
    padding: 10px;
`