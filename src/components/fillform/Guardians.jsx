import React from 'react'
import { Field, reduxForm } from 'redux-form'

let Guardians = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <center>
                <div>
                    <br />
                    <br />
                    <div class="ui black massive circular label"><div class="textcolor"> Huoltajan tiedot</div></div>
                    <br />
                    <br />

                    <div class="ui black compact message">
                        <ul class="list">
                            <div class="textcolor"> Jos olet alle 15-vuotias, tarvitsemme huoltajan yhteystiedot. Pyydäthän luvan tulla mukaan.</div>
                        </ul>
                    </div>
                    <form class="ui form">
                        <div class="two wide field">
                            <div class="ui black circular label"><div class="textcolor"> <label>Huoltajan Etunimi</label></div> </div>
                            <br />
                            <br />
                            <Field name="guardianFirstName" type="text" component="input" placeholder="Huoltajan Etunimi" />
                        </div>

                        <div class="two wide field">
                            <div class="ui black circular label"><div class="textcolor"> <label>Huoltajan Sukunimi</label></div> </div>
                            <br />
                            <br />
                            <Field name="guardianLastName" type="text" component="input" placeholder="Huoltajan Sukunimi" />
                        </div>

                        <div class="two wide field">
                            <div class="ui black circular label"><div class="textcolor"> <label>Huoltajan Puhelinnumero</label></div> </div>
                            <br />
                            <br />
                            <Field name="guardianPhoneNumber" component="input" type="text" placeholder="Puhelinnumero" />
                        </div>

                    </form >
                </div >
            </center>
        </form >
    )
}

Guardians = reduxForm({
    // a unique name for the form
    form: 'contact'
})(Guardians)

export default Guardians
