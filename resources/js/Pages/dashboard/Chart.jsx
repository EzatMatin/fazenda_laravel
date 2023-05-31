/*  import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";




function Chart({priceCeasa}) {
    return (
        <>
            <div className="">
                <div className="">
                    <div className="bg-white flex flex-row overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex lg:flex-row md:flex-col flex-col justify-between">
                            <BarChart
                                width={500}
                                height={300}
                                data={priceCeasa}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="price_min" fill="#ffbf00" />
                                <Bar dataKey="price_max" fill="#a52a2a" />
                            </BarChart>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Chart;
 
 */

import React from "react";
import { Chart } from "react-google-charts";

/* export const data = ({ priceCeasa }) => {
    [
        ["Year", "Price Max", "price Min"],
        ["2014", priceCeasa.price_max, priceCeasa.price_min],
        ["2015", priceCeasa.price_max, priceCeasa.price_min],
        ["2016", priceCeasa.price_max, priceCeasa.price_min],
        ["2017", priceCeasa.price_max, priceCeasa.price_min],
    ];
}; */
export const data = 
    [
        ["Year", "Price Max", "price Min"],
        ["2014", 20, 10],
        ["2014", 20, 10],
        ["2014", 20, 10],
        ["2014", 20, 10],
        ["2014", 20, 10],
        ["2014", 20, 10],
  
    ];

export const options = {
    chart: {
        title: "Company Performance",
        subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
};

function App() {
    return (
        <Chart
            className="p-4 bg-white rounded-lg"
            chartType="Bar"
            width="100%"
            height="300px"
            data={data}
            options={options}
        />
    );
}

export default App;
