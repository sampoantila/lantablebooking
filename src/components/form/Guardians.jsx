import React from 'react'
import { Field, reduxForm } from 'redux-form'

let Guardians = () => {
    return (
        <div>
            <center>
                <br />
                <br />
                <div className="ui black massive circular label"><div className="textcolor"> Huoltajan tiedot</div></div>
                <br />
                <br />

                <div className="ui black compact message">
                    <ul className="list">
                        <div className="textcolor"> Jos olet alle 15-vuotias, tarvitsemme huoltajan yhteystiedot. Pyydäthän luvan tulla mukaan.</div>
                    </ul>
                </div>

                <form className="ui form">
                    <div className="two wide field">
                        <div className="ui black circular label"><div className="textcolor"> <label>Huoltajan Etunimi</label></div> </div>
                        <br />
                        <br />
                        <Field name="guardianFirstName" type="text" component="input" placeholder="Huoltajan Etunimi" />
                    </div>

                    <div className="two wide field">
                        <div className="ui black circular label"><div className="textcolor"> <label>Huoltajan Sukunimi</label></div> </div>
                        <br />
                        <br />
                        <Field name="guardianLastName" type="text" component="input" placeholder="Huoltajan Sukunimi" />
                    </div>

                    <div className="two wide field">
                        <div className="ui black circular label"><div className="textcolor"> <label>Huoltajan Puhelinnumero</label></div> </div>
                        <br />
                        <br />
                        <Field name="guardianPhoneNumber" component="input" type="text" placeholder="Puhelinnumero" />
                    </div>
                </form >
            </center>
        </div >
    )
}

Guardians = reduxForm({
    // a unique name for the form
    form: 'contact'
})(Guardians)

export default Guardians
