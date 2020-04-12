import * as React from 'react';
import { Table, Tr, Th, Td } from '../common/listStyle'
import { Link } from 'react-router-dom';

export const GardeViewAll: React.FC<any> = () => {

    const Parameters = [
        {title : "list de garde du mois 05-2020", headers: ["Nom", "Prenom", "unite"], data : ["khamlech", "Mohammed", "Biochimie"] }
    ]

    return (
        <div>
            {Parameters.map((parameter:any) =>(
                <div key={parameter.title}>
                <h1>{parameter.title}</h1>
                <Link to="/admin/mohammed/gardes/create-new" >Creer Nouveau List de Gardes</Link>
                <hr/>
                <p>
                    <Table>
                        <thead>
                        <Tr >
                            {parameter.headers.map((header:any) =><Th key={header}>{header}</Th>)}
                        </Tr>
                        </thead>
                        <tbody><Tr>{parameter.data.map((body:any)=><Td>{body}</Td>)}</Tr></tbody>
                    </Table>
                </p>
                <hr />
                
                </div>
            ))}
        </div>
    )
}