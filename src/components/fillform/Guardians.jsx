import React from 'react'
import { Field, reduxForm } from 'redux-form'

let Guardians = props => {
    const { handleSubmit } = props
    return (
        <div>

            <br></br>
            <br></br>
            <div class="ui black massive circular label"><div class="textcolor"> Huoltajan tiedot</div></div>
            <br></br>
            <br></br>
            <div class="ui black compact message">
                <ul class="list"><div class="textcolor">
                    Jos olet alle 15-vuotias, tarvitsemme huoltajan yhteystiedot. Pyydäthän luvan tulla mukaan.
              </div>
                </ul>
            </div>


            <center><div class="four wide field">
                <div class="ui black circular label"><div class="textcolor"> <label>Huoltajan Etunimi</label></div> </div>
                <br></br>
                <br></br>
                <input type="text" name="last-name" placeholder="Huoltajan Etunimi" />
            </div>
                <div class="four wide field">
                    <div class="ui black circular label"><div class="textcolor"> <label>Huoltajan Sukunimi</label></div> </div>
                    <br></br>
                    <br></br>
                    <input type="text" name="last-name" placeholder="Huoltajan Sukunimi" />
                </div>
                <div class="four wide field">
                    <div class="ui black circular label"><div class="textcolor"> <label>Huoltajan Puhelinnumero</label></div> </div>
                    <br></br>
                    <br></br>
                    <input type="text" name="last-name" placeholder="Huoltajan Puhelinnumero" />
                </div>
            </center>
        </div>
    )
}

Guardians = reduxForm({
    // a unique name for the form
    form: 'contact'
})(Guardians)

export default Guardians
