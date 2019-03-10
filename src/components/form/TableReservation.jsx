import React from 'react';
import { Field, reduxForm } from 'redux-form'


let TableReservation = () => {

    return (
        <div>
            <br />
            <br />
            <br />
            <div className="ui black massive circular label"><div className="textcolor">Pöytäpaikkavaraus</div></div>
            <br />
            <br />

            <center>
                <div className="ui black compact message">
                    <div className="textcolor">
                        Pöydän koko on 85 x 75 cm ja vieressä on pehmustettu tuoli!
                <p />Yksi pistorasia ja yksi nettipistoke per pöytä.
                <p />Tuo oma jatkojohto ja oma nettipiuha (varajohtoja löytyy kyllä).
                    </div>
                </div>
            </center>

            <br />
            <br />

            <div className="ui one column centered grid">
                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <Field
                            name="pc"
                            id="pc"
                            component="input"
                            type="checkbox"
                        />
                        <label><div className="ui black circular label"><div className="textcolor">PC pelikone/läppäri</div></div></label>
                    </div>
                </div>


                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <Field
                            name="consol"
                            id="consol"
                            component="input"
                            type="checkbox"
                        />
                        <label><div className="ui black circular label"><div className="textcolor">Konsoli</div></div></label>
                    </div>
                </div>


                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <Field
                            name="hangAround"
                            id="hangAround"
                            component="input"
                            type="checkbox"
                        />
                        <label><div className="ui black circular label"><div className="textcolor">Hengailu</div></div></label>
                    </div>
                </div>

                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <Field
                            name="other"
                            id="other"
                            component="input"
                            type="checkbox"
                        />
                        <label><div className="ui black circular label"><div className="textcolor">Muu</div></div></label>
                        <br />
                        <div className="ui input">
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

