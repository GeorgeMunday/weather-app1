"use client";

import React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

interface TempChartProps {
  dailyTemp: number[];
}

const Chart: React.FC<TempChartProps> = React.memo(({ dailyTemp }) => {
  if (!dailyTemp || dailyTemp.length === 0) return null;

  const data = dailyTemp.map((temp, i) => ({
    x: i,
    y: temp,
  }));

  return (
    <div className="w-[800px] h-[200px]">
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="x" />
          <YAxis />
          <Line
            type="monotone"
            dataKey="y"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
});

export default Chart;
