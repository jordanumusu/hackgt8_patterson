import React, { useState, useEffect } from 'react';
import Layout from "../components/Layout";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/outline";
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
import axios from "axios";


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

  const RevenueTooltip = ({ active, payload, label }: ToolTipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white bg-opacity-95 rounded-lg p-4">
          <p className="label text-green-500">{`${format(
            parseISO(label),
            "eeee, d MMM, yyyy"
          )}`}</p>
        </div>
      );
    }
    return null;
  };

  const VisitorTooltip = ({ active, payload, label }: ToolTipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white bg-opacity-95 rounded-lg p-4">
          <p className="label text-gray-400">{`${payload[0].value}`}</p>
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
      Visitors: 2400,
      firstTime: 68,
    },
    {
      date: "10/14",
      Visitors: 1398,
      firstTime: 200,
    },
    {
      date: "10/21",
      Visitors: 2290,
      firstTime: 290,
    },
    {
      date: "10/28",
      Visitors: 2780,
      firstTime: 120,
    },
  ];
  const pieColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF8021"];

  return (
    <Layout>
      <div className="flex-col pr-10 pl-6 grid-rows-12">
        <div className="flex justify-evenly w-full mb-8 space-x-12">
          <div className="flex flex-col items-center flex-1 p-4  bg-white shadow rounded-lg">
            <p className="text-3xl font-semibold mb-2">$10,860</p>
            <p className="text-gray-500 mb-1">Net Profit</p>
            <div className="flex items-center space-x-2 text-green-500">
              <ArrowUpIcon className="h-4 w-4" />
              <p>5.09%</p>
            </div>
          </div>
          <div className="flex flex-col items-center flex-1 p-4 bg-white shadow rounded-lg">
            <p className="text-3xl font-semibold mb-2">$115,720</p>
            <p className="text-gray-500 mb-1">Gross Margin</p>
            <div className="flex items-center space-x-2 text-green-500">
              <ArrowUpIcon className="h-4 w-4" />
              <p>15.22%</p>
            </div>
          </div>
          <div className="flex flex-col items-center flex-1 p-4 bg-white shadow rounded-lg">
            <p className="text-3xl font-semibold mb-2">50%</p>
            <p className="text-gray-500 mb-1">Retention Rate</p>
            <div className="flex items-center space-x-2 text-red-500">
              <ArrowDownIcon className="h-4 w-4" />
              <p>7.14%</p>
            </div>
          </div>
          <div className="flex flex-col items-center flex-1 p-4 bg-white shadow rounded-lg">
            <p className="text-3xl font-semibold mb-2">$23.15</p>
            <p className="text-gray-500 mb-1"> Customer Acquisition Cost</p>
            <div className="flex items-center space-x-2 text-red-500">
              <ArrowDownIcon className="h-4 w-4" />
              <p>2.19%</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-white flex flex-col shadow-lg w-3/4">
            <div className="flex border-b-2 px-8 py-4 w-full justify-between">
            <h2 className=" text-xl font-semibold">
              Revenue Overview
              
            </h2>
            <div className="flex items-center space-x-2 text-red-500 font-semibold">
              <ArrowDownIcon className="h-4 w-4 font-semibold transform" />
              <p>2.19%</p>
            </div>
              </div>
            <ResponsiveContainer height="80%" className="py-4">
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
                  tickFormatter={(str) => {
                    const date = parseISO(str);
                    if (date.getDate() % 7 == 0) {
                      return format(date, "MMM d");
                    }
                    return "";
                  }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  dataKey="revenue"
                  tickFormatter={(str) => {
                    return `$${str}`;
                  }}
                />
                <Tooltip content={<RevenueTooltip />} />
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
          <div className="bg-white col-start-9 w-1/4 ml-8 shadow-lg rounded-xl">
            <div className="font-bold font-display flex justify-center items-start">
              TO-DO
            </div>
          </div>
        </div>

        <div className="bg-white col-span-4 shadow-lg rounded-xl flex-col">
          <div className="font-medium justify-left2 flex text-2xl mt-4 ml-8">
            Visitors
          </div>
          <ResponsiveContainer height="84%" className="py-3">
            <BarChart data={visitorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip content={<VisitorTooltip />} />
              <Legend />
              <Bar
                filter="shadow"
                dataKey="Visitors"
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
