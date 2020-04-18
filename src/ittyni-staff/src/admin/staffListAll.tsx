import * as React from 'react';
import { Link } from 'react-router-dom';
import { Staff } from '../controller/staff';
import {Table, Tr, Th, Td} from './listStyle';

export const StaffListALL : React.FC<any> = () =>{


    const [dataSearch, setdataSearch] = React.useState ({
        search: ''
       })
 
       const {
         search
         } = dataSearch;
 
 
       const onSearch = (e:any) => setdataSearch({...dataSearch, [e.target.name]:e.target.value})
 
    const staff = new Staff();

    React.useLayoutEffect(()=>{
        staff.addNewEmployers({firstName : "mohammed", lastName : "khmalech", departement : "biochimie"})
    })

interface FormFieldProps{
id: string
firstName: string
lastName: string
departement: string
      }
    
   let DataEmps: FormFieldProps[] = [
    {id:"1",  firstName : "mohammed", lastName : "khmalech", departement : "biochimie"},
    {id:"2", firstName : "hicham", lastName : "bendarbi", departement : "biochimie"},
    {id:"3", firstName : "hmida", lastName : "alaoui", departement : "serologie"}
]
        // Search Into Table Filter
        var dataEmployes: FormFieldProps[] = [];
        // let dataEmployes : string[];

        if (DataEmps === null) {
          console.log("Spinner")
        }else{
            dataEmployes = DataEmps.filter(
        (employer) => {
         const query = search.toLowerCase();
         return employer.firstName.toLowerCase().indexOf(query)>=0 
         ||  employer.lastName.toLowerCase().indexOf(query)>=0 
         || employer.departement.toLowerCase().indexOf(query)>=0
                       }
                         );
                        }

    let Employes;
    Employes = dataEmployes.map(em => (
           <Tr key={em.id}>
              <Td>
              {em.firstName}
              </Td>
              <Td>
              {em.lastName}
               </Td>
              <Td className="hide-sm">
              {em.departement}
            </Td>
           </Tr>
       ))

       const staffTbody = <tbody className="text-center">{Employes}</tbody> 

    return(
        <div>
        <h1>List des Personelles de laboratoire CHU</h1>
        <Link to={'./add-new-employer'} >Ajouter Nouveau </Link>

        <hr/>
    <div>
        <input placeholder="Search" name="search" value={search} onChange={e=> onSearch(e)}/>
     </div>
        <hr />
        <Table>
            <thead>
                <Tr>
                    <Th>nom</Th>
                    <Th>Prenom</Th>
                    <Th>PPR</Th>
                    <Th>unite</Th>
                </Tr>
            </thead>

            {/* Tbody Table */}
                {staffTbody}
        </Table>
        </div>
    )
}
