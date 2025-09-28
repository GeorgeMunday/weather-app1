"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

interface WeatherLineChartProps {
  data: number[];
  label?: string;
  color?: string;
  title?: string;
}

const WeatherLineChart: React.FC<WeatherLineChartProps> = React.memo(
  ({ data, label = "Value", color = "#8884d8", title }) => {
    if (!data || data.length === 0) return null;

    const chartData = data.map((value, index) => ({
      x: index,
      y: value,
    }));

    return (
      <div className="w-[100%] h-[250px] mr-10">
        {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" tick={{ fontSize: 12 }} />
            <YAxis
              label={{
                value: label,
                angle: -90,
                position: "insideLeft",
                offset: 10,
                fontSize: 12,
              }}
              tick={{ fontSize: 12 }}
              width={40}
            />
            <Tooltip
              formatter={(value: number | string) => {
                const num =
                  typeof value === "number" ? value : parseFloat(value);
                return num.toFixed(1);
              }}
              labelFormatter={() => ""}
              cursor={false}
            />
            <Line
              type="monotone"
              dataKey="y"
              stroke={color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
);

export default WeatherLineChart;
