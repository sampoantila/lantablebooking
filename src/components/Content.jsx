import React, {Component} from 'react';
import TableGroup from './TableGroup';
import AuthBar from './AuthBar';
import tableservice from '../service/tableservice';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booked: []
        }
    }

    componentWillMount() {
        tableservice.allBooked()
        .then(res => {
            console.log(res);
            this.setState({booked: res.data});
        });
    }

    render() {
        return <div className="App-content">
            <AuthBar />
            <br/>
            <TableGroup name="A" booked={this.state.booked} />
            <TableGroup name="B" right booked={this.state.booked} />
            <br/>
            <TableGroup name="C" booked={this.state.booked} />
            <TableGroup name="D" right booked={this.state.booked} />
            <br/>
            <div className="food-table">
            Ruokapöytä
            </div>
        </div>;
    }
}

export default Content;
