import React from "react";
import { LineChart,
    Line, 
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer } 
    from 'recharts';

const data = ({ priceCeasa }) => {
 
    return (
      
        <>      
        <div className="flex lg:flex-row md:flex-col flex-col justify-between">
  
            <LineChart
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
                <Line type="monotone" dataKey="price_min" fill="#ffbf00" />
                <Line type="monotone" dataKey="price_max" fill="#a52a2a" />
            </LineChart>
            </div>
        </>
    );
}

export default data;