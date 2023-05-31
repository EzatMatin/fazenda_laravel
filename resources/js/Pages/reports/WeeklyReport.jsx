import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";a

const WeeklyReport = ( { priceCeasa }) => {
    return (
        <>
   
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
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
export default WeeklyReport;