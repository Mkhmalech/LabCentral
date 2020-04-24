import React from 'react'

export const PopUp: React.FC<any> = (props) => {

    return (
        <div className="modal">
            <section style={{textAlign: "center"}}>
                  <header className="modal__header">
                      <h1>{props.title}</h1>
                  </header>
                  <section className="modal__content">
                       {props.children}
                  </section>
            </section>
            <section className="modal__actions">
               {props.canCancel && (<button className="btn btn-primary" onClick={props.onCancel}>
                   Annuler
               </button>)}
               {props.canConfirm && <button className="btn btn-primary" onClick={props.onConfirm}>Confirmer</button>}
            </section>
        </div>
    )
}