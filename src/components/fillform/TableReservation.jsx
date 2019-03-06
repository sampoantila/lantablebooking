import React from 'react';
import { Field, reduxForm } from 'redux-form'


let TableReservation = () => {

    return (
        <div>
            <br />
            <br />
            <br />
            <div class="ui black massive circular label"><div class="textcolor">Pöytäpaikkavaraus</div></div>
            <br />
            <br />

            <center>
                <div class="ui black compact message">
                    <div class="textcolor">
                        Pöydän koko on 85 x 75 cm ja vieressä on pehmustettu tuoli!
                <p />Yksi pistorasia ja yksi nettipistoke per pöytä.
                <p />Tuo oma jatkojohto ja oma nettipiuha (varajohtoja löytyy kyllä).
                    </div>
                </div>
            </center>

            <br />
            <br />

            <div class="ui one column centered grid">
                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <Field
                            name="pc"
                            id="pc"
                            component="input"
                            type="checkbox"
                        />
                        <label><div class="ui black circular label"><div class="textcolor">PC pelikone/läppäri</div></div></label>
                    </div>
                </div>


                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <Field
                            name="consol"
                            id="consol"
                            component="input"
                            type="checkbox"
                        />
                        <label><div class="ui black circular label"><div class="textcolor">Konsoli</div></div></label>
                    </div>
                </div>


                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <Field
                            name="hangAround"
                            id="hangAround"
                            component="input"
                            type="checkbox"
                        />
                        <label><div class="ui black circular label"><div class="textcolor">Hengailu</div></div></label>
                    </div>
                </div>

                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <Field
                            name="other"
                            id="other"
                            component="input"
                            type="checkbox"
                        />
                        <label><div class="ui black circular label"><div class="textcolor">Muu</div></div></label>
                        <br />
                        <div class="ui input">
                            <Field name="otherSpeci" type="text" component="input" placeholder="Mite muuta teet :-)" /></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

TableReservation = reduxForm({
    // a unique name for the form
    form: 'contact'
})(TableReservation)

export default TableReservation

