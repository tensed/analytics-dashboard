import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import avatar1 from '../static/avatar2.png';
import avatar2 from '../static/avatar3.png';
import avatar3 from '../static/avatar4.png';
import { Avatar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import MenuButton from './MenuButton';

function createData(id, name, status, users, impression, conversion,profilepic) {
  return { id, name, status, users, impression, conversion, profilepic };
}

const rows = [
  createData(0, 'Robert Johnstons', 'Paused', 189, 324234, 2342,'https://cdn3.iconfinder.com/data/icons/generic-avatars/128/avatar_portrait_man_male_3-128.png'),
  createData(1, 'Anna Atkinsone', 'Active', 231, 21323, 234,'https://cdn3.iconfinder.com/data/icons/generic-avatars/128/avatar_portrait_woman_female_redhead_1-128.png'),
  createData(2, 'Mark Atkinsone', 'Active', 234, 223413, 4535,'https://cdn4.iconfinder.com/data/icons/vr-avatars/512/VR8-128.png'),
];

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

export default function CustomerAnalytics() {
  const classes = useStyles();
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
              <Box
                      alignItems="center"
                      display="flex"
                    >
              <Avatar
                        className={classes.avatar}
                        src={row.profilepic}
                      >
                      </Avatar>

                {row.name}
                </Box></TableCell>
              <TableCell><MenuButton text={row.status} /></TableCell>
              <TableCell>{row.users} <td>Total Users</td></TableCell>
              <TableCell>{row.impression} <td>Total Impressions</td></TableCell>
              <TableCell>{row.conversion} <td>Converted Users</td></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        
      </div>
    </React.Fragment>
  );
}