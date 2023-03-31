import React, { PureComponent, useContext } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './CircleProgress.css'
import { ThemeContext } from '../../ThemeContext';




export default function Barchart() {
    let Theme = useContext(ThemeContext).Theme
    const data = [
        {
            name: 'Sun',
            uv: 40,
        },
        {
            name: 'Mon',
            uv: 70,
        },
        {
            name: 'Tue',
            uv: 30,
        },
        {
            name: 'Wen',
            uv: 80,
        },
        {
            name: 'Thu',
            uv: 60,
        },
    ];
    return (
        <div className="BarChart-conainer bg-white p-3">

            <h5 className='mb-2'>Actvites</h5>
            <ResponsiveContainer width="100%" height="95%">
                <BarChart
                    barGap={0}
                    barSize={25}
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis
                        padding={{ left: 10, right: 30 }}
                        dataKey="name"
                        tick={{ stroke: Theme.text, strokeWidth: 1 }}

                    // label={{ value: "Days", fill: "red", margin: 20 }}
                    />


                    <YAxis tick={{ stroke: Theme.text, strokeWidth: 1 }} ticks={[0, 20, 40, 60, 80, 100]} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip
                        // itemStyle={
                        //     {
                        //         backgroundColor: "red",
                        //     }
                        // }
                        wrapperStyle={
                            {
                                color: Theme.iconColor,
                                border:"none"
                            }
                        }
                    />
                    {/* <Legend 
                    iconSize={0}
                    wrapperStyle={
                        {
                            color:"red"

                        }
                    }
                /> */}
                    <Bar className='pb-2' dataKey="uv" fill={Theme.chartsColor} background={{ file: "#ccc" }} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}