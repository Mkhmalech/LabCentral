import * as React from 'react';
import styled from 'styled-components';

export const StaffListALL : React.FC<any> = () =>{

    return(
        <Table>
            <thead>
                <Tr>
                    <Th>nom</Th>
                    <Th>Prenom</Th>
                    <Th>PPR</Th>
                </Tr>
            </thead>
            <tbody>
                <Tr>
                    <Td>khmalech</Td>
                    <Td>Mohammed</Td>
                    <Td>1322222</Td>
                </Tr>
            </tbody>
        </Table>
    )
}

const Table = styled('table')`
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    border-spacing: 0;
    min-width: 612px;
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