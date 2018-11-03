import React, {Component} from 'react';
import Table from './Table';

class TableGroup extends Component {
    render() {
        var contentClass = " table-group-content-left";
        var labelClass = "table-group-label";

        if (this.props.right) {
            contentClass = " table-group-content-right";
            labelClass += " upside-down";
        }

        var tables = [1,2,3,4];
        var flipTables = [5,6,7,8];

        if (this.props.right) {
            tables = [8,7,6,5];
            flipTables = [4,3,2,1];
        }

        return <div className="table-group">
            <div className={"table-group-content" + contentClass}>
                <div className={labelClass}>{this.props.name}</div>
                <Table location={this.props.name+"9"}
                    booked={this.props.booked}
                    booking={this.props.booking}
                    toggle={this.props.toggle}
                    rowstart />
                {tables.map(item => (
                    <Table
                        key={item}
                        location={this.props.name + item}
                        booked={this.props.booked}
                        booking={this.props.booking}
                        toggle={this.props.toggle}
                        right={this.props.right} />
                ))}
                {flipTables.map(item => (
                    <Table
                        key={item}
                        flip
                        location={this.props.name + item}
                        booked={this.props.booked}
                        booking={this.props.booking}
                        toggle={this.props.toggle}
                        right={this.props.right} />
                ))}
            </div>
        </div>;
    }
}

export default TableGroup;