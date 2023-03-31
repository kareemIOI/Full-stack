import React, { PureComponent, useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ThemeContext } from '../../ThemeContext';



const data = [
    {
        name: 'Sun',
        uv: 40,
        II: 10
    },
    {
        name: 'Mon',
        uv: 30,
        II: 30

    },
    {
        name: 'Tue',
        uv: 30,
        II: 70
    },
    {
        name: 'Wen',
        uv: 80,
        II: 60
    },
    {
        name: 'Thu',
        uv: 60,
        II: 30
    },
];

export default function Linechart() {
    const Theme = useContext(ThemeContext).Theme
    console.log(Theme)
    return (
        <div className='lineChart-contianer p-3'>
            <h5 className='mb-3'>Earings</h5>
            <ResponsiveContainer width="96%" height="90%">
                <LineChart
                    barGap={0}
                    barSize={25}
                    width={500}
                    height={300}
                    data={data}

                >
                    <XAxis
                        padding={{ left: 10, right: 30 }}
                        dataKey="name"
                        tick={{ stroke: Theme.text, strokeWidth: 1 }}
                    // label={{ value: "Days", fill: "red", margin: 20 }}
                    />
                                        <CartesianGrid strokeDasharray="3 3" />



                    <YAxis tick={{ stroke: 'red', strokeWidth: 1 }} ticks={[0, 20, 40, 60, 80, 100]} />
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <Tooltip
                        // itemStyle={
                        //     {
                        //         backgroundColor: "red",
                        //     }
                        // }
                        wrapperStyle={
                            {
                                color: "blue",
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
                    <Line dataKey="uv" fill={Theme.text} background={{ file: "#ccc" }} />
                    <Line dataKey="II" fill={Theme.text} background={{ file: "#ccc" }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}