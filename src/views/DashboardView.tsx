import React from "react";
import Layout from "../components/Layout";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function DashboardView() {
  const pieData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const revenueData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const pieColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-x-8 gap-y-4 pr-10 pl-6">
        
        <div className="col-span-12">
          There seems to be an abnormality in item sales. <span>Details</span>
        </div>
        <div className="bg-white col-span-6 h-96 p-4 shadow-lg">
          <ResponsiveContainer>
            <LineChart
              width={500}
              height={300}
              data={revenueData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="pv"
                strokeWidth={3}
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white col-span-3 h-96 shadow-lg rounded-xl">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={pieColors[index % pieColors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white col-span-2 h-96 shadow-lg rounded-xl">
         
        </div>
        <div className="bg-white flex justify-evenly w-full col-span-12 grid-flow-row auto-rows-auto mt-6 mr-4 divide-x shadow">
          <div className="flex flex-col items-center flex-1 p-12">
            <p className="text-3xl font-semibold mb-2">$10,860</p>
            <p className="text-gray-500">Net Profit</p>
          </div>
          <div className="flex flex-col items-center flex-1 p-12">
            <p className="text-3xl font-semibold mb-2">$115,720</p>
            <p className="text-gray-500">Gross Margin</p>
          </div>
          <div className="flex flex-col items-center flex-1 p-12">
            <p className="text-3xl font-semibold mb-2">50%</p>
            <p className="text-gray-500">Retention Rate</p>
          </div>
          <div className="flex flex-col items-center flex-1 p-12">
            <p className="text-3xl font-semibold mb-2">$23.15</p>
            <p className="text-gray-500"> Customer Acquisition Cost</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DashboardView;
