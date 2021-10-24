import React from "react";
import Layout from "../components/Layout";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  AreaChart,
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
      date: "10/7",
      revenue: 2400,
    },
    {
      date: "10/14",
      revenue: 1398,
    },
    {
      date: "10/21",
      revenue: 2290,
    },
    {
      date: "10/28",
      revenue: 2780,
    },
  ];

  const visitorData = [
    {
      date: "10/7",
      visitors: 2400,
      firstTime: 68,
    },
    {
      date: "10/14",
      visitors: 1398,
      firstTime: 200,
    },
    {
      date: "10/21",
      visitors: 2290,
      firstTime: 290,
    },
    {
      date: "10/28",
      visitors: 2780,
      firstTime: 120,
    },
  ];
  const pieColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-x-8 gap-y-4 pr-10 pl-6">
        <div className="bg-white col-span-8 p-4 shadow-lg flex-col">
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Holy smokes! </strong>
            <span className="block sm:inline">
              Something seriously bad happened.
            </span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
          <ResponsiveContainer height="80%" className="mt-8">
            <AreaChart
              data={revenueData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <defs>
                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#0CA054" stopOpacity={0.2} />
                  <stop offset="75%" stopColor="#0CA054" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area
                type="natural"
                dataKey="revenue"
                stroke="#0CCE6B"
                strokeWidth={2}
                fill="url(#color)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white col-span-4 shadow-lg rounded-xl flex-col">
          <div className="text-gray-400 justify-center flex text-2xl">Visitors</div>
          <ResponsiveContainer height="90%">
            <BarChart data={visitorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="visitors" fill="#ef476f" radius={[10, 10, 0, 0]} />
              <Bar dataKey="firstTime" fill="#ffd166" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
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
            <p className="text-gray-500"> Visitor Acquisition Cost</p>
          </div>
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
      </div>
    </Layout>
  );
}

export default DashboardView;
