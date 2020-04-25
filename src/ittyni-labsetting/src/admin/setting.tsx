import * as React from 'react';
import { Table, Tr, Th, Td } from '../common/listStyle'
import {Container_inputs, Inputs} from '../common/settingStyle'
import {Dropallback} from '../../../commons/DropAllBack'
import {
    Container,
    ContainerNavigation,
    LinkNavigation,
    ContainerSearch,
    Button, Input,
    TitleTablePararameters, 
    SpanTextButtonNouveu} from '../common/settingStyle'
import { PopUp } from '../../../commons/PopUp';


export const Setting: React.FC<any> = () => {  

    const [add, addCreateParams] = React.useState(false);

    // Navigation inside Parameters Table initialised by table "Ajouter Conge"
    const [navigateValue, navigateParams] = React.useState({
        navigate:"Ajouter Conge"
    });
    const {
        navigate
    } = navigateValue;

    const showDepartement = (event: React.MouseEvent) => {
        event.preventDefault()
        navigateParams({
            navigate: "Ajouter Departement"
        })

        
    }
    const showConge = () => {
        
        navigateParams({
            navigate: "Ajouter Conge"
        })
    }
    const showJrFirie = () => {
        navigateParams({
            navigate: "Ajouter Jours Ferie"
        })
    }
    const showAutomates = () => {
        navigateParams({
            navigate: "Ajouter Automates"
        })
    }

    // END Navigation inside Parameters Table 
    
    const test = () => addCreateParams(!add)

    const [formData, setData] = React.useState ({
        text : ''
        })
    const {
        text
    }= formData;

    const [formparamsC, setFormDataConge] = React.useState ({
        conge : '',
        duree : '',
        unite : ''
        })
    const [formparamsA, setFormDataAutom] = React.useState ({
        reference : '',
        marque : '',
        version: ''
    })  
    const [formparamsD, setFormDataDepar] = React.useState ({
           titre: ''
    })  
    const [formparamsJ, setFormDataJrF] = React.useState ({
        jrname: ''
    })
    const { conge, duree, unite } = formparamsC;
    const { reference, marque, version } = formparamsA;
    const { titre } = formparamsD;
    const { jrname } = formparamsJ;


    const inputsConge = (
        <Container_inputs>
                <Inputs type="text" name="conge" placeholder="conge" value={conge} onChange={e => onChangeConge(e)} />
                <Inputs type="text" name="duree" placeholder="duree" value={duree} onChange={e => onChangeConge(e)} />
                <Inputs type="text" name="unite" placeholder="unite" value={unite} onChange={e => onChangeConge(e)} />
        </Container_inputs>
    )

    const inputsDep = (
        <Container_inputs>
            <Inputs type="text" name="titre" placeholder="departement" value={titre} onChange={e => onChangeDepartement(e)} />
        </Container_inputs>
    )

    const inputsJrf = (
        <Container_inputs>
            <Inputs type="text" name="jrname" placeholder="jour ferie" value={jrname} onChange={e => onChangeJrFerie(e)} />
        </Container_inputs>
    )

    const inputsAutom = (
        <div className="container_inputs_Params">
            <Inputs type="text" name="marque" placeholder="marque" value={marque} onChange={e => onChangeAutomates(e)} />
            <Inputs type="text" name="reference" placeholder="reference" value={reference} onChange={e => onChangeAutomates(e)} />
            <Inputs type="text" name="version" placeholder="version" value={version} onChange={e => onChangeAutomates(e)} />
        </div>
    )

    const onChangeConge = (e: any) => setFormDataConge({ ...formparamsC, [e.target.name]: e.target.value })
    const onChangeDepartement = (e: any) => setFormDataDepar({ ...formparamsD, [e.target.name]: e.target.value })
    const onChangeAutomates = (e: any) => setFormDataAutom({ ...formparamsA, [e.target.name]: e.target.value })
    const onChangeJrFerie = (e: any) => setFormDataJrF({ ...formparamsJ, [e.target.name]: e.target.value })


    const Add = (event: React.MouseEvent, id: string) => {
        event.preventDefault()
        // Use your functions controller
        if(id==="Ajouter Departement") {
            DataDep.push(formparamsD) 
            console.log(DataDep)
        }

        if(id==="Ajouter Automates") {
            dataAutomate.push(formparamsA)
            console.log(dataAutomate)
        }

       if(id==="Ajouter Conge") {
           DataConge.push(formparamsC)
           console.log(DataConge)
       }

       if(id==="Ajouter Jours Ferie") {
           dataJrF.push()
           console.log(dataJrF)
       }

      
      addCreateParams(!add)
    }
      const  DataDep = [
            {titre: "biochimie"},
            {titre: "biochimie1"},
            {titre: "hematologie"}
      ]
      const DataConge = [
            {conge: "maternite", duree: "3", unite: "jrs"},
            {conge: "volantaire", duree: "10", unite: "jrs"}
      ]

      const dataJrF = [
            {jrname: "la marche verte"},
            {jrname: "fete de l'independance"},
            {jrname: "revolution du roi et du peuple"}
      ]

      const dataAutomate = [
                    {marque: "archetecte", reference: "8000-i", version: "2013"}
      ]

        // operation title personalise
        const displayPopUp = (paramP: any) => {
            Parameters.map(param => {
                   if(param.title===paramP){
                       {paramP && addCreateParams(!add)}
                       setData({
                           text: !param.title ? '' : param.title
                        }) 
                      
                   }
               } ) 
           }


    const Parameters = [
        {title : "Ajouter Departement", headers: ["departement"], data : DataDep },
        {title : "Ajouter Jours Ferie", headers: ["Jours Ferie"], data : dataJrF },
        {title : "Ajouter Conge", headers: ["Conge", "duree", "unite"], data : DataConge },
        {title : "Ajouter Automates", headers: ["Marque", "refrerence", "version"], data : dataAutomate }
    ]

    return (
        <React.Fragment>
            {add && <Dropallback />}
            {add && <PopUp title={formData.text} canCancel canConfirm onCancel={() => test()} onConfirm={

                (event: any) => Add(event, text)

            }>
              

                {formData.text === "Ajouter Conge" && inputsConge}
                {formData.text === "Ajouter Departement" && inputsDep}
                {formData.text === "Ajouter Jours Ferie" && inputsJrf}
                {formData.text === "Ajouter Automates" && inputsAutom}

            </PopUp>}

            {/* Navigation Inside parameters setting */}
            <div style={{width: "90%"}}>
            <TitleTablePararameters>Gestion Parameters</TitleTablePararameters>
            </div>
            
               <ContainerNavigation> 
                   <LinkNavigation onClick={()=> showConge()}>Conges</LinkNavigation>
                   <LinkNavigation onClick={(event)=> showDepartement(event)}>Departements</LinkNavigation>
                   <LinkNavigation onClick={()=> showJrFirie()}>Jours Ferie</LinkNavigation>
                   <LinkNavigation onClick={()=> showAutomates()}>Automates</LinkNavigation>
                </ContainerNavigation>
               
                {/* Serach Container */}
                {/* <ContainerSearch>
                    <Input type="text" name="search" placeholder="Search..." />
                    <Button>+ Nouveau</Button>
                </ContainerSearch> */}

            {Parameters.map((parameter: any) => (
                <div style={{width:"90%"}}>
                {parameter.title===navigate &&
                <div key={parameter.title}>
               <hr />
                <ContainerSearch>
                    <Input type="text" name="search" placeholder="Search..." />
                    <Button onClick={() => displayPopUp(parameter.title)}>+ <SpanTextButtonNouveu >Nouveau</SpanTextButtonNouveu> </Button>
                </ContainerSearch>
                <hr />
                    <p>
                        <Table>
                            <thead>
                                <Tr >
                                    {parameter.headers.map((header: any) => <Th key={header}>{header}</Th>)}
                                </Tr>
                            </thead>

                            <tbody>{parameter.data.map((body: any) => <Tr>
                                {body.titre && <Td>{body.titre}</Td>}
                                {body.conge && <Td>{body.conge}</Td>}
                                {body.jrname && <Td>{body.jrname}</Td>}
                                {body.duree && <Td>{body.duree}</Td>}
                                {body.unite && <Td>{body.unite}</Td>}
                                {body.marque && <Td>{body.marque}</Td>}
                                {body.reference && <Td>{body.reference}</Td>}
                                {body.version && <Td>{body.version}</Td>}
                            </Tr>)}</tbody>
                        </Table>
                    </p>
                    
                </div>
            }
            </div>
            ))}
        </React.Fragment>
    )
}

