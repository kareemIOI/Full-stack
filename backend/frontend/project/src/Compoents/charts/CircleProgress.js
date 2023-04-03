import React from 'react'
import { Progress } from 'rsuite';
import './CircleProgress.css'
// from react suit library
import { ThemeContext } from '../../ThemeContext';
import { useContext } from 'react'



export default function CircleProgress() {
    const Theme = useContext(ThemeContext).Theme
    const style = {
        // width: 400,
        display: 'inline-block',
        marginRight: 10,

        // background:"black",
    };
    const style1 = {
        width: 40,
        height: 8,
        background:"#ccc"
    }
    const style2 = {
        width: 40,
        height: 8,
        background:Theme.chartsColor
    }
    return (
        <div className=' circleChart  d-flex bg-white p-3 justify-content-center flex-column gap-3 ' style={style}>
            <h5>Attendence</h5>
            <Progress.Circle width={236} className='my-3 align-self-center' percent={30} showInfo={false} strokeWidth={10} trailWidth={10} trailColor="#ccc" strokeColor={Theme.chartsColor} />
            <div className='atendcey-details d-flex justify-content-between'>
                <div>
                    <div style={style1}  className='atendecy-line absent'></div>
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
    )
}
