import React from "react";
import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface LineChartProps {
  data: Array<{ [key: string]: any }>;
  dataKey: string;
  xAxisKey: string;
  title: string;
}

export default function LineChart({
  data,
  dataKey,
  xAxisKey,
  title,
}: LineChartProps) {
  return (
    <div className="bg-[#1c2a3a] p-4 rounded-lg">
      <h2 className="text-lg font-medium mb-4">{title}</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={data}>
            <XAxis
              dataKey={xAxisKey}
              stroke="#94a3b8"
              tick={{ fill: "#94a3b8" }}
            />
            <YAxis stroke="#94a3b8" tick={{ fill: "#94a3b8" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#17212b",
                border: "none",
                borderRadius: "8px",
              }}
            />
            <CartesianGrid stroke="#2b3b4d" />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke="#5ebbf6"
              strokeWidth={2}
              dot={{ fill: "#5ebbf6" }}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
