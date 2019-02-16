import React from 'react';

const FillFormButton = ({ buttonPress }) => {

    console.log("button pressed")

    return (
        <div>
            <br></br>
            <br></br>
            <center><button class="positive massive ui button" type="submit" onClick={buttonPress}>Lähetä</button></center>
            <br></br>
            <br></br>
        </div>
    )
}

export default FillFormButton;