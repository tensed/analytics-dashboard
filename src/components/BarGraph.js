import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { BarChart, CartesianGrid, Tooltip, Bar, XAxis, YAxis, ResponsiveContainer, ReferenceArea } from 'recharts';
import Title from './Title';
import Divider from '@material-ui/core/Divider';

const data = [
  {
    "name": 1,
    "cost": 100
  },
  {
    "name": 2,
    "cost": 200
  },
  {
    "name": 3,
    "cost": 300
  },
  {
    "name": 4,
    "cost": 400
  },
  {
    "name": 5,
    "cost": 500
  },
  {
    "name": 6,
    "cost": 600
  },
  {
    "name": 7,
    "cost": 500
  },
  {
    "name": 8,
    "cost": 400
  },
  {
    "name": 9,
    "cost": 300
  },
  {
    "name": 10,
    "cost": 200
  },
  {
    "name": 11,
    "cost": 100
  },
  {
    "name": 12,
    "cost": 300
  },
  {
    "name": 13,
    "cost": 500
  },
  {
    "name": 14,
    "cost": 700
  },
  {
    "name": 15,
    "cost": 900
  },
  {
    "name": 16,
    "cost": 1100
  },
  {
    "name": 17,
    "cost": 1300
  },
  {
    "name": 18,
    "cost": 1100
  },
  {
    "name": 19,
    "cost": 900
  },
  {
    "name": 20,
    "cost": 700
  },
  {
    "name": 21,
    "cost": 500
  },
  {
    "name": 22,
    "cost": 300
  },
]

export default function BarGraph() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Overview</Title>
      <Divider />
      <ResponsiveContainer>
      <BarChart width={100} height={250} data={data} >
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis interval={0} dataKey="name" />
  <YAxis tick={false} />
  <ReferenceArea
          x1={6}
          x2={16}
        />
  <Tooltip />
  <Bar dataKey="cost" fill='rgb(052,101,229)' />
</BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}