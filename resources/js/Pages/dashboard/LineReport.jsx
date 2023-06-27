import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

function data(props) {
    return (
        <ResponsiveContainer width="100%" height={200}>
            <LineChart
                data={props.priceCeasa}
                margin={{
                    top: 5,
                    right: 5,
                    left: 5,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price_min" fill="#ffbf00" />
                <Line type="monotone" dataKey="price_max" fill="#a52a2a" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default data;
