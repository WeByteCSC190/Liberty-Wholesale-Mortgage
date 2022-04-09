import React, { useMemo, useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import MOCK_DATA from "./MOCK_DATA.json"
import {
  makeStyles
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

const DisplayData = MOCK_DATA.map(
  (info) => {
    return (
      <tr>
        <td>{info.first_name}</td>
        <td>{info.last_name}</td>
        <td>{info.status}</td>
        <td>{info.email}</td>
        <td>{info.credit_score}</td>
        <td>{info.date}</td>
        <td>{info.phone_num}</td>
      </tr>
    )
  }
)

const Leads = () => {
  const [leadsData, setLeadsData] = useState([]);
  //   this.state = {
  //     leadsData: [],
  //     // firstName: [],
  //     // lastName: [],
  //     // status: [],
  //     // creditScore: [],
  //     // phoneNum: [],
  //     // date: [],


  //   }
  //   this.fetchLeads = this.fetchLeads.bind(this)
  // }

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/leads-list/')
      .then(response => response.json())
      .then(data => {
        setLeadsData(data);
      })
      .catch(err => {
        console.log(123123);
      });
  }, []);



  // render() {
  // const columns = [
  //   {
  //     Header: 'First Name',
  //     accesor: 'first_name',
  //     sortable: false
  //   },
  //   {
  //     Header: 'Last Name',
  //     accesor: 'last_name',
  //     sortable: false
  //   },
  //   {
  //     Header: 'Status',
  //     accesor: 'status',
  //     sortable: false
  //   },
  //   {
  //     Header: 'Credit Score',
  //     accesor: 'credit_score',
  //     sortable: false
  //   },
  //   {
  //     Header: 'Phone Number',
  //     accesor: 'phone_num',
  //     sortable: false
  //   },
  //   {
  //     Header: 'Date Added',
  //     accesor: 'date',
  //     sortable: true
  //   },
  // ];

  // const {
  //   first_name,
  //   last_name,
  //   status,
  //   email,
  //   credit_score,
  //   phone_num,
  //   date
  // } = useTable({
  //   columns,
  //   MOCK_DATA,
  // });
  const classes = useStyles();
  return (
    <div>
      <table class="table table-stripped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last name</th>
            <th>Status</th>
            <th>Email</th>
            <th>Credit Score</th>
            <th>Date</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {DisplayData}
        </tbody>
      </table>
    </div>
  );

};
// }

export default Leads;
