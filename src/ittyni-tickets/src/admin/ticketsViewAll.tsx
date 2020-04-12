import * as React from 'react';
import { Table, Tr, Th, Td } from '../common/listStyle'

export const TicketsViewAll: React.FC<any> = () => {

    const Parameters = [
        {title : "Ajouter Departement", headers: ["departement"], data : ["Biochimie"] }
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

