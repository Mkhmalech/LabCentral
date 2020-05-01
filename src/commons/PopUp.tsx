import React from 'react'
import styled from 'styled-components'
export const PopUp: React.FC<any> = (props) => {

    return (
        <Container_Modal>
            <Container_Header_Content>
                  <Section_Header>
                      <Title>{props.title}</Title>
                  </Section_Header>
                  <Section_Content >
                       {props.children}
                  </Section_Content>
            </Container_Header_Content>
            <Action_Modal>
               {props.canCancel && (<Btn_Annuler_Confirmer onClick={props.onCancel}>
                   Annuler
               </Btn_Annuler_Confirmer>)}
               {props.canConfirm && <Btn_Annuler_Confirmer className="btnPOP" onClick={props.onConfirm}>Confirmer</Btn_Annuler_Confirmer>}
            </Action_Modal>
        </Container_Modal>
    )
}


const Container_Modal = styled('div')`
width: 50%;
right: 15%;
top: 25%;
background: white;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
position: fixed;
transition: opacity 500ms;
&:target {
    visibility: visible;
    opacity: 1;
  }
@media(max-width: 700px){
    width: 90%;
    RIGHT: auto;
}
`
const Container_Header_Content = styled("section")`
text-align: center;
`

const Section_Header = styled('section')`
padding: 1rem;
background: #117A8B;
color: white;
padding: 1em;

`

const Title = styled('h1')`
font-zise: 20px;
@media(max-width: 700px) {
    font-size: 15px;
 }
`

const Section_Content = styled('section')`
padding: 1rem;
display: flex;
flex-direction: column;
align-items: center;
`

const Action_Modal = styled('section')`
display: flex;
justify-content: flex-end;
padding: 1rem;
JUSTIFY-CONTENT: center;
`

const Btn_Annuler_Confirmer = styled('button')`
    color: #117a8b;
    font-size: 1em; 
    margin: 1em;
    width: 150px;
    padding: 0.25em 1em;
    border: 2px solid #117a8b;
    border-radius: 3px;
  
  @media(max-width: 700px){
      padding: 0.5em;
  }
  
`