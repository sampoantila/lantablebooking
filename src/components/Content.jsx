import React, {Component} from 'react';
import TableGroup from './TableGroup';

class Content extends Component {

    render() {
        return <div className="App-content">
            <TableGroup name="A" />
            <TableGroup name="B" right />
            <br/>
            <TableGroup name="C" />
            <TableGroup name="D" right />
            <br/>
            <div className="food-table">
            Ruokapöytä
            </div>
        </div>;
    }
}

export default Content;
