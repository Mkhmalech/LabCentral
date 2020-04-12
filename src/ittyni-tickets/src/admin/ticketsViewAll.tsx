import * as React from 'react';
import { Table, Tr, Th, Td } from '../common/listStyle'

export const Setting: React.FC<any> = () => {

    const Parameters = [
        {title : "Ajouter Departement", headers: ["departement"], data : ["Biochimie"] },
        {title : "Ajouter Jours Ferie", headers: ["Jours Ferie"], data : ["Marche Verte"] },
        {title : "Ajouter Conge", headers: ["Conge", "duree", "unite"], data : ["Maternite", "3", "Jours"] },
        {title : "Ajouter Automates", headers: ["Marque", "refrerence", "version"], data : ["archetecte", "8000-i", "2013"] },
    ]

    return (
        <div>
            {Parameters.map((parameter:any) =>(
                <div key={parameter.title}>
                <h1>{parameter.title}</h1>
                <hr />
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

