import React, { useContext } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ThemeContext } from '../../ThemeContext';




const data = [
    {
        name: 'Page A',
        uv: 8000,
    },
    {
        name: 'Page B',
        uv: 9000,
    },
    {
        name: 'Page C',
        uv: 5000,
    },
    {
        name: 'Page D',
        uv: "6000",
    },
];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function AdmainBarChart() {
    const Theme = useContext(ThemeContext).Theme
    const colors = [Theme.text , Theme.iconColor , Theme.navBar , Theme.sideBar];
    return (
        <div className="AdmainBarChart-conainer bg-white p-3">


            <h5 className='mb-2'>Actvites</h5>
            <ResponsiveContainer width="100%" height="95%">

                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis ticks={[2000, 4000, 6000, 8000, 10000]} />
                    <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
