import React from 'react'
import { Field, reduxForm } from 'redux-form'

let Tournaments = () => {
    return (
        <div>
            <br />
            <br />
            <div class="ui black massive circular label"><div class="textcolor">Turnaukset</div></div>
            <br />
            <br />

            <div class="ui black compact message">
                <div class="textcolor"> <div class="header">
                </div>
                </div>

                <div class="textcolor"><ul class="list">
                    <li>Tässä turnaukset joita voidaan järjestetää.</li>
                    <li>Muistathan asentaa ja päivittää (!) pelit jo kotona</li>
                    <li>Valitse mihin haluat osallistua, niin tiedetään valmistella paremmin.</li>
                    <li>Vapaavalintaiseen kohtaan voit kirjoittaa toivepelit, <p>katsotaan pystytäänkö niistä järjestämään turnausta. Vai järjestäisitkö sinä?</p> </li>
                </ul></div>
            </div>

            <br />
            <br />

            <div class="ui one column centered grid">
                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <Field name="fortnite" id="fortnite" component="input" type="checkbox" />
                        <label><div class="ui black circular label"><div class="textcolor">Fortnite</div></div></label>
                    </div>
                </div>
            </div>

            <div class="ui one column centered grid">
                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <Field name="teamFortress2" id="teamFortress2" component="input" type="checkbox" />
                        <label><div class="ui black circular label"><div class="textcolor">Team Fortress 2</div></div></label>
                    </div>
                </div>
            </div>

            <div class="ui one column centered grid">
                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <Field name="overwatch" id="overwatch" component="input" type="checkbox" />
                        <label><div class="ui black circular label"><div class="textcolor">Overwatch</div></div></label>
                    </div>
                </div>
            </div>

            <div class="ui one column centered grid">
                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <Field name="brawlhalla" id="brawlhalla" component="input" type="checkbox" />
                        <label><div class="ui black circular label"><div class="textcolor">Brawlhalla</div></div></label>
                    </div>
                </div>
            </div>

            <div class="ui one column centered grid">
                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <Field name="tetris" id="tetris" component="input" type="checkbox" />
                        <label><div class="ui black circular label"><div class="textcolor">Tetris</div></div></label>
                    </div>
                </div>
            </div>

            <div class="ui one column centered grid">
                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <Field name="nhl15" id="nhl15" component="input" type="checkbox" />
                        <label><div class="ui black circular label"><div class="textcolor">Konsoli: NHL15</div></div></label>
                    </div>
                </div>
            </div>

            <div class="ui one column centered grid">
                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <Field name="liero" id="liero" component="input" type="checkbox" />
                        <label><div class="ui black circular label"><div class="textcolor">liero <a href="http://www.liero.be/"> http://www.liero.be/</a></div></div></label>
                    </div>
                </div>
            </div>

            <div class="ui one column centered grid">
                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <Field name="footballPhysical" id="footballPhysical" component="input" type="checkbox" />
                        <label><div class="ui black circular label"><div class="textcolor">Pöytäfutis (fyysinen)</div></div></label>
                    </div>
                </div>
            </div>

            <div class="ui one column centered grid">
                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <Field name="pingbongPhysical" id="pingbongPhysical" component="input" type="checkbox" />
                        <label><div class="ui black circular label"><div class="textcolor">Pingis (fyysinen)</div></div></label>
                    </div>
                </div>
            </div>

            <div class="ui one column centered grid">
                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <Field name="billijard" id="billijard" component="input" type="checkbox" />
                        <label><div class="ui black circular label"><div class="textcolor">Biljardi (fyysinen, kasipallo/ysipallo yms)</div></div></label>
                    </div>
                </div>
            </div>

            <div class="ui one column centered grid">
                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <Field name="other" id="other" component="input" type="checkbox" />
                        <label><div class="ui black circular label"><div class="textcolor">Muu</div></div></label>
                        <br/>
                        <div class="ui input"><Field name="otherGame" type="text" component="input" placeholder="Mikä muu peli :-)" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Tournaments = reduxForm({
    // a unique name for the form
    form: 'contact'
})(Tournaments)

export default Tournaments
