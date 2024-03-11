import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'chart.js/auto';

const HumidityChart = () => {
    const [timestamps, setTimestamps] = useState([]);
    const [humidities, setHumidities] = useState([]);
    const [myChart, setMyChart] = useState(null);

    useEffect(() => {
        const fetchDataInterval = setInterval(() => {
            fetchSensorData();
        }, 10000);

        fetchSensorData();

        return () => clearInterval(fetchDataInterval);
    }, []);

    const fetchSensorData = async () => {
        try {
            const response = await axios.get('/api/sensors');
            const sensorData = response.data;
            const humidTimestamps = sensorData.map(entry => {
                const date = new Date(entry.recorded_at);
                return date.toLocaleTimeString('en-US', { hour12: false });
            });
            const humidHumidities = sensorData.map(entry => entry.humid);
            setTimestamps(humidTimestamps);
            setHumidities(humidHumidities);
        } catch (error) {
            console.error('Error fetching sensor data:', error);
        }
    };

    useEffect(() => {
        if (timestamps.length > 0 && humidities.length > 0) {
            if (myChart) {
                myChart.destroy();
            }

            const ctx = document.getElementById('humidity-chart');
            const newChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: timestamps,
                    datasets: [{
                        label: 'Humidity',
                        backgroundColor: 'rgb(59, 130, 246)',
                        borderColor: 'rgb(59, 130, 246)',
                        data: humidities,
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    responsive: true,
                    aspectRatio: 2,
                }
            });

            setMyChart(newChart);
        }
    }, [timestamps, humidities]);

    return (
        <div className="relative shadow-sm p-5 border-slate-300 hover:border-blue-500 duration-300 border-solid border-2 flex items-center">
            <div className="flex-grow" style={{ display: 'inline-block' }}>
                <p className='font-bold text-3xl'>Humidity Chart</p>
                <canvas id="humidity-chart" style={{ width: '100%', height: '100%' }}></canvas>
            </div>
        </div>
    );
};

export default HumidityChart;
