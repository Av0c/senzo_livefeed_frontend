import { PieChart, Pie, Sector, Cell } from 'recharts';
import React from 'react';
const data = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
{ name: 'Group C', value: 300 }, { name: 'Group D', value: 200 }];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

export default class SimplePieChart extends React.Component {
    render() {
        return (
            <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>

                <Pie
                    data={data}
                    cx={420}
                    cy={200}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={90}
                    outerRadius={100}
                    fill="#8884d8"
                    label
                >
                    {
                        data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                    }
                </Pie>
                <text x={425} y={200} textAnchor="middle" dominantBaseline="middle">
                    Occupancy
                </text>
            </PieChart>
        );
    }
}