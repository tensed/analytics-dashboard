import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import avatar1 from "../static/avatar2.png";
import avatar2 from "../static/avatar3.png";
import avatar3 from "../static/avatar4.png";
import { Avatar } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import MenuButton from "./MenuButton";
import axios from 'axios';

function createData(
  id,
  name,
  status,
  users,
  impression,
  conversion,
  profilepic
) {
  return { id, name, status, users, impression, conversion, profilepic };
}

const rows = 
  [
    {
      "id": 1,
      "name": "Leanne Graham",
      "status": "Paused",
      "user": 120,
      "impression": 145,
      "conversion": 2345
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "status": "Active",
      "user": 130,
      "impression": 135,
      "conversion": 1005
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "status": "Paused",
      "user": 120,
      "impression": 345,
      "conversion": 12345
    },
    {
      "id": 4,
      "name": "Clementine Bauch",
      "status": "Paused",
      "user": 90,
      "impression": 245,
      "conversion": 9345
    }
  ]


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

export default function CustomerAnalytics() {
  const classes = useStyles();
//   const [tableData, useTableData] = React.useState(null);
//   useEffect(() => {
// var config = {
//   headers: {'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Origin' : '*',
//     'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//     "Content-Type": "application/json",
//     "Origin": "localhost:3000",
//   }
// };
//   axios.get('http://24.228.180.236:1337/user',config)
//   .then(function (response) {
//     // handle success
//     console.log(response);
//     useTableData(response.data);
    
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
// },[]
//   );
  return (
    <React.Fragment>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Users</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Users</TableCell>
            <TableCell>Impression</TableCell>
            <TableCell>Conversion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows ? rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Box alignItems="center" display="flex">
                  <Avatar
                    className={classes.avatar}
                    src={row.profilepic}
                  ></Avatar>

                  {row.name}
                </Box>
              </TableCell>
              <TableCell>
                <MenuButton text={row.status} />
              </TableCell>
              <TableCell>
                {row.user} <td>Total Users</td>
              </TableCell>
              <TableCell>
                {row.impression} <td>Total Impressions</td>
              </TableCell>
              <TableCell>
                {row.conversion} <td>Converted Users</td>
              </TableCell>
            </TableRow>
          )): null}
        </TableBody>
      </Table>
      <div className={classes.seeMore}></div>
    </React.Fragment>
  );
}
