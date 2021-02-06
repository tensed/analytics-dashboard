import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  BarChart,
  CartesianGrid,
  Tooltip,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";
import Title from "./Title";
import Divider from "@material-ui/core/Divider";
import mock from '../mock/mockBarGraph.json';

export default function BarGraph() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Overview</Title>
      <Divider />
      <ResponsiveContainer>
        <BarChart width={100} height={250} data={mock}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis interval={0} dataKey="name" />
          <YAxis tick={false} />
          <ReferenceArea x1={6} x2={16} />
          <Tooltip />
          <Bar dataKey="cost" fill="rgb(052,101,229)" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
