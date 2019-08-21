import React, {Component} from 'react';
import Table from './Table';

class TableGroup extends Component {
    render() {
        var labelClass = "table-group-label";
        var sizeClass = " table-group-normal";

        var tables = [1,2,3,4];
        var flipTables = [5,6,7,8];

        if (this.props.extra) {
            sizeClass = " table-group-extra";
            tables = [1,2,3,4,5,6,7];
            flipTables = [8,9,10,11,12,13,14];
        }


        return <div className={"table-group" + sizeClass }>
            <div className={"table-group-content"}>
                <div className={labelClass}>{this.props.name}</div>
                {tables.map(item => (
                    <Table
                        key={item}
                        location={this.props.name + item}
                        booked={this.props.booked}
                        booking={this.props.booking}
                        toggle={this.props.toggle}
                    />
                ))}
                {flipTables.map(item => (
                    <Table
                        key={item}
                        flip
                        location={this.props.name + item}
                        booked={this.props.booked}
                        booking={this.props.booking}
                        toggle={this.props.toggle}
                    />
                ))}
            </div>
        </div>;
    }
}

export default TableGroup;