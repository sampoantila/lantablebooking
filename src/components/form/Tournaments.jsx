import React from 'react'
import { Field, reduxForm } from 'redux-form'

let Tournaments = () => {
    return (
        <div>
            <br />
            <br />
            <div className="ui black massive circular label"><div className="textcolor">Turnaukset</div></div>
            <br />
            <br />

            <div className="ui black compact message">
                <div className="textcolor"> <div className="header">
                </div>
                </div>

                <div className="textcolor"><ul className="list">
                    <li>Tässä turnaukset joita voidaan järjestetää.</li>
                    <li>Muistathan asentaa ja päivittää (!) pelit jo kotona</li>
                    <li>Valitse mihin haluat osallistua, niin tiedetään valmistella paremmin.</li>
                    <li>Vapaavalintaiseen kohtaan voit kirjoittaa toivepelit, <p>katsotaan pystytäänkö niistä järjestämään turnausta. Vai järjestäisitkö sinä?</p> </li>
                </ul></div>
            </div>

            <br />
            <br />

            <div className="ui one column centered grid">
                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <Field name="fortnite" id="fortnite" component="input" type="checkbox" />
                        <label><div className="ui black circular label"><div className="textcolor">Fortnite</div></div></label>
                    </div>
                </div>
            </div>

            <div className="ui one column centered grid">
                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <Field name="teamFortress2" id="teamFortress2" component="input" type="checkbox" />
                        <label><div className="ui black circular label"><div className="textcolor">Team Fortress 2</div></div></label>
                    </div>
                </div>
            </div>

            <div className="ui one column centered grid">
                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <Field name="overwatch" id="overwatch" component="input" type="checkbox" />
                        <label><div className="ui black circular label"><div className="textcolor">Overwatch</div></div></label>
                    </div>
                </div>
            </div>

            <div className="ui one column centered grid">
                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <Field name="brawlhalla" id="brawlhalla" component="input" type="checkbox" />
                        <label><div className="ui black circular label"><div className="textcolor">Brawlhalla</div></div></label>
                    </div>
                </div>
            </div>

            <div className="ui one column centered grid">
                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <Field name="tetris" id="tetris" component="input" type="checkbox" />
                        <label><div className="ui black circular label"><div className="textcolor">Tetris</div></div></label>
                    </div>
                </div>
            </div>

            <div className="ui one column centered grid">
                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <Field name="nhl15" id="nhl15" component="input" type="checkbox" />
                        <label><div className="ui black circular label"><div className="textcolor">Konsoli: NHL15</div></div></label>
                    </div>
                </div>
            </div>

            <div className="ui one column centered grid">
                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <Field name="liero" id="liero" component="input" type="checkbox" />
                        <label><div className="ui black circular label"><div className="textcolor">liero <a href="http://www.liero.be/"> http://www.liero.be/</a></div></div></label>
                    </div>
                </div>
            </div>

            <div className="ui one column centered grid">
                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <Field name="footballPhysical" id="footballPhysical" component="input" type="checkbox" />
                        <label><div className="ui black circular label"><div className="textcolor">Pöytäfutis (fyysinen)</div></div></label>
                    </div>
                </div>
            </div>

            <div className="ui one column centered grid">
                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <Field name="pingbongPhysical" id="pingbongPhysical" component="input" type="checkbox" />
                        <label><div className="ui black circular label"><div className="textcolor">Pingis (fyysinen)</div></div></label>
                    </div>
                </div>
            </div>

            <div className="ui one column centered grid">
                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <Field name="billijard" id="billijard" component="input" type="checkbox" />
                        <label><div className="ui black circular label"><div className="textcolor">Biljardi (fyysinen, kasipallo/ysipallo yms)</div></div></label>
                    </div>
                </div>
            </div>

            <div className="ui one column centered grid">
                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <Field name="other" id="other" component="input" type="checkbox" />
                        <label><div className="ui black circular label"><div className="textcolor">Muu</div></div></label>
                        <br/>
                        <div className="ui input"><Field name="otherGame" type="text" component="input" placeholder="Mikä muu peli :-)" /></div>
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
