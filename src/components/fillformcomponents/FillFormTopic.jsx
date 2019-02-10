import React, { Component } from 'react';
import lion from '../../images/logo_black.png';
// import { Button } from 'semantic-ui-react'

class FillFormTopic extends Component {

    render() {
        console.log("ddfdf")
        return (
            <div>
                <main>
                    <br></br>
                    <br></br>
                    <center><img class="ui medium image" src={lion} /></center>
                    <br></br>
                    <br></br>
                    <br></br>

                    <br></br>
                    <div class="maintopic">
                        <link rel="stylesheet" type="text/css" />
                        <b>AsLANin</b>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <div class="topic">
                        <link rel="stylesheet" type="text/css"  />
                        <b>ILMOITTAUTUMINEN</b>
                    </div>
                </main>
            </div>
        )
    }
}

export default FillFormTopic;