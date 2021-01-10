import React, { useState, useEffect } from 'react'
import { getDailyRecord } from '../Api/Index';
import { Line, Bar } from 'react-chartjs-2';
function Graph(props) {
    let [dailyData, setdailyData] = useState([]);
    useEffect(() => {
        async function DailyRecord() {
            let allRecordofTheDay = await getDailyRecord();
            setdailyData(allRecordofTheDay);
        }
        DailyRecord();
    });
    console.log(dailyData);

    const lineChart = (
        dailyData[0] ? (<Line
            data={{
                labels: dailyData(({ date }) => date),
                datasets: [{
                    data: ({ infected }) => infected,
                    label: 'Infected',
                    borderColor: '#4343ff',
                    fill: true
                }, {
                    data: ({ deaths }) => deaths,
                    label: 'Infected',
                    borderColor: '#4343ff',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true
                }]
            }}
        />) : null
    );
    return (
        <div className="container">
            {lineChart}
        </div>
    )
}

export default Graph
