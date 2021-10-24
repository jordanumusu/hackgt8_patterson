import React, { useState } from "react";
import Layout from "../components/Layout";
import Calendar from "react-calendar";
import { parseISO, format, subDays } from "date-fns";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  AreaChart,
  Tooltip,
} from "recharts";

function DashboardView() {
  interface ToolTipProps {
    active?: any;
    payload?: any;
    label?: any;
  }

  const [value, onChange] = useState(new Date());
  const expenditureData = [
    { name: "Rent & Utilities", value: 5 },
    { name: "Food Costs", value: 40 },
    { name: "Labor Costs", value: 30 },
    { name: "Marketing", value: 15 },
    { name: "Misc.", value: 10 },
  ];

  const CustomTooltip = ({ active, payload, label }: ToolTipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white bg-opacity-95 rounded-lg p-4">
          <p className="label text-green-500">{`${format(parseISO(label),"eeee, d MMM, yyyy")}`}</p>
        </div>
      );
    }
    return null;
  };

  let revenueData = [];

  for (let i = 30; i >= 0; i--) {
    revenueData.push({
      date: subDays(new Date(), i).toISOString().substr(0, 10),
      revenue: Math.trunc(2400 + Math.random() * 500),
    });
  }

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
  const pieColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF8021"];

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-x-8 gap-y-6 pr-10 pl-6">
        <div className="flex flex-col col-span-3">
          <h1 className="col-span-12 text-gray-500 text-3xl font-semibold font-sans">
            Dashboard
          </h1>
          <h1 className="col-span-12 text-gray-300 text-2xl">
            Overview, October 24 2021
          </h1>
        </div>
        <div className="flex justify-evenly w-full gap-4 col-span-12 ">
          <div className="flex flex-col items-center flex-1 p-4 bg-white h-24 shadow rounded-lg">
            <p className="text-3xl font-semibold mb-2">$10,860</p>
            <p className="text-gray-500">Net Profit</p>
          </div>
          <div className="flex flex-col items-center flex-1 p-4 bg-white shadow rounded-lg">
            <p className="text-3xl font-semibold mb-2">$115,720</p>
            <p className="text-gray-500">Gross Margin</p>
          </div>
          <div className="flex flex-col items-center flex-1 p-4 bg-white shadow rounded-lg">
            <p className="text-3xl font-semibold mb-2">50%</p>
            <p className="text-gray-500">Retention Rate</p>
          </div>
          <div className="flex flex-col items-center flex-1 p-4 bg-white shadow rounded-lg">
            <p className="text-3xl font-semibold mb-2">$23.15</p>
            <p className="text-gray-500"> Visitor Acquisition Cost</p>
          </div>
        </div>
        <div className="bg-white col-span-8 shadow-lg ">
          <div className="border-b-2 px-8 py-4 text-xl font-semibold">
            Revenue Overview
          </div>
          <ResponsiveContainer height="80%" className=" py-4">
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
                  <stop offset="75%" stopColor="#0CA054" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tickFormatter={ (str)  => {
                  const date = parseISO(str);
                  if (date.getDate() % 7 == 0) {
                      return format(date,"MMM d")
                  }
                  return ""
                }}
              />
              <YAxis axisLine={false} tickLine={false} dataKey="revenue"  tickFormatter={ (str) => {
                return `$${str}`
              }}/>
              <Tooltip content={<CustomTooltip />} />
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
        <div className="bg-white col-start-9 col-end-13 h-96 shadow-lg rounded-xl">
          <h1 className="mt-96">fdasfds</h1>
        </div>
        <div className="bg-white col-span-4 shadow-lg rounded-xl flex-col">
          <div className="text-gray-400 justify-left2 flex text-2xl my-2 ml-5">
            Visitors
          </div>
          <ResponsiveContainer height="85%">
            <BarChart data={visitorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip cursor={{ fill: "transparent" }} />
              <Bar
                filter="shadow"
                dataKey="visitors"
                fill="#ef476f"
                radius={[10, 10, 0, 0]}
              />
              <Bar dataKey="firstTime" fill="#ffd166" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
       
        
      </div>
    </Layout>
  );
}

export default DashboardView;
