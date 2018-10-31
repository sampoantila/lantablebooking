import React, {Component} from 'react';
import Table from './Table';

class TableGroup extends Component {
    render() {
        var contentClass = " table-group-content-left";

        if (this.props.right) {
            contentClass = " table-group-content-right";
        }

        var tables = [1,2,3,4];
        var flipTables = [5,6,7,8];

        return <div className="table-group">
            <div className={"table-group-content" + contentClass}>
                <div className="table-group-label">{this.props.name}</div>
                {tables.map(item => (
                    <Table
                        key={item}
                        location={this.props.name + item}
                        booked={this.props.booked}
                        booking={this.props.booking}
                        toggle={this.props.toggle} />
                ))}
                <br/>
                {flipTables.map(item => (
                    <Table
                        key={item}
                        flip
                        location={this.props.name + item}
                        booked={this.props.booked}
                        booking={this.props.booking}
                        toggle={this.props.toggle} />
                ))}
            </div>
        </div>;
    }
}

export default TableGroup;