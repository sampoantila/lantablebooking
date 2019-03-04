import React from 'react';
import { Field, reduxForm } from 'redux-form'


let TableReservation = props => {
    const { handleSubmit } = props
    return (
        <div>
            < br ></br >
            <br></br>
            <div class="ui black massive circular label"><div class="textcolor">Pöytäpaikkavaraus</div></div>
            <br></br>
            <br></br>



            <center><div class="ui black message six wide field"><div class="textcolor">
                Pöydän koko on 85 x 75 cm ja vieressä on pehmustettu tuoli!
                Yksi pistorasia ja yksi nettipistoke per pöytä.
              Tuo oma jatkojohto ja oma nettipiuha (varajohtoja löytyy kyllä).
</div></div></center>

            <br></br>



            <div class="ui one column centered grid">
                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <input type="checkbox" name="example" />
                        <label><div class="ui black circular label"><div class="textcolor">PC pelikone/läppäri</div></div></label>
                    </div>
                </div>

                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <input type="checkbox" name="example" />
                        <label><div class="ui black circular label"><div class="textcolor">Konsoli</div></div></label>
                    </div>
                </div>

                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <input type="checkbox" name="example" />
                        <label><div class="ui black circular label"><div class="textcolor">Hengailu</div></div></label>
                    </div>
                </div>

                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <input type="checkbox" name="example" />
                        <label><div class="ui black circular label"><div class="textcolor">Muu</div></div></label>
                    </div>
                    <div class="five column centered row">
                        <br></br>
                        <div class="ui input"><input type="text" placeholder="Mite muuta teet :-)" /></div>

                    </div>
                </div>
            </div>

        </div>
    )
}

TableReservation = reduxForm({
    // a unique name for the form
    form: 'contact'
})(TableReservation)

export default TableReservation

