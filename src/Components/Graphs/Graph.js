import React, { useState, useEffect } from 'react'
import { getDailyRecord } from '../Api/Index';
import { Line } from 'react-chartjs-2';
import './Graph.css';
function Graph() {
    let [dailyData, setdailyData] = useState([]);
    useEffect(() => {
        async function DailyRecord() {
            let allRecordofTheDay = await getDailyRecord();
            const RecentRecord = allRecordofTheDay.map((UpdatedOne)=>({
                confirmed:UpdatedOne.confirmed.total,
                deaths:UpdatedOne.deaths.total,
                date:UpdatedOne.reportDate,
            }))
            setdailyData(RecentRecord);
        }
        DailyRecord();
    });

    const lineChart = (
        dailyData.length ? (<Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#4343ff',
                    fill: true
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: '#red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true
                }]
            }}
        />) : null
    );
    return (
        <div className="graph-container">
            {lineChart}
        </div>
    )
}

export default Graph
