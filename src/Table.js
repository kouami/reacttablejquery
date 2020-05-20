//import './css/jquery.dataTables.css'
import 'datatables.net-dt/css/jquery.datatables.css'
import React, {Component} from 'react'
//import App from "./App";

const $ = require('jquery')
$.DataTable = require('datatables.net')
require( 'datatables.net-bs' )( window, $ );

export class Table extends Component {
    componentDidMount() {
        console.log(this.el);
        this.$el = $(this.el)
        this.$el.DataTable({
            data: this.props.data,
            columns: [
                { title: "Name" },
                { title: "Position" },
                { title: "Office" },
                { title: "Extn." },
                { title: "Start date" },
                { title: "Salary" }
            ]
        })
    }

    componentWillUnmount() {
    }
    
    updateTableData(data) {
        this.$el.dataTable().api().clear();
        this.$el.dataTable().api().rows.add(data);
        this.$el.dataTable().api().draw();
    }

    render() {
        if(this.$el) {
            this.updateTableData(this.props.data)
        }
        
        return (
            <div>
                <table className="display" width="100%" ref = {el => this.el = el }></table>

            </div>
        );
    }
}
