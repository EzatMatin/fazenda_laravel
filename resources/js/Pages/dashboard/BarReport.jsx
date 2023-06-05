import React from "react";
//import Layout from '@/Layouts/DashboardLayout'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";



import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

export const Data = ({priceCeasa, auth}) => {

    return (
      
 
        <BarChart
                width={1000}
                height={500}
                data={priceCeasa}
                margin={{
                    top: 10,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price_min" fill="#ffbf00" />
                <Bar dataKey="price_max" fill="#a52a2a" />
            </BarChart>
  
    );
}

//Data.layout = page => <Layout children={page} title="Welcome" />

export default Data;