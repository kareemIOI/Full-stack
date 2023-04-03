import React, { PureComponent, useContext } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { ThemeContext } from '../../ThemeContext';
import './CircleProgress.css'

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group D', value: 200 },
];

export default function Piechart({ title, data1 }) {
    let Theme = useContext(ThemeContext).Theme
    console.log(Theme)
    const COLORS = [Theme.text, '#ccc',];
    const style1 = {
        width: 40,
        height: 8,
        background: "#ccc"
    }
    const style2 = {
        width: 40,
        height: 8,
        background: Theme.chartsColor
    }

    return (
        <div className='PieChart-container bg-white p-3 d-flex flex-column gap-3'>
            <h5 className='mb-2'>Students</h5>
            <PieChart width={350} height={300} className=" pie" >
                {/* change the width here too 250 200 */}
                <Pie
                    data={data}
                    innerRadius={90}
                    outerRadius={120}
                    // innerRadius={70}
                    // outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                    labelLine={true}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                </Pie>
            </PieChart>
            <div className='atendcey-details d-flex justify-content-between'>
                <div>
                    <div style={style1} className='atendecy-line absent'></div>
                    <p>Absent</p>
                    <p>70%</p>
                </div>
                <div>
                    <div style={style2} className='atendecy-line present'></div>
                    <p>Present</p>
                    <p>30%</p>
                </div>
            </div>
        </div>
    );
}

