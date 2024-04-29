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
                        backgroundColor: 'rgb(255, 255, 255)',
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
                    scales: {
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.2)',
                            },
                            ticks: {
                                color: 'white',
                            },
                        },
                        y: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.2)',
                            },
                            ticks: {
                                color: 'white',
                            },
                        },
                    },
                }
            });

            setMyChart(newChart);
        }
    }, [timestamps, humidities]);

    return (
        <div className="relative shadow-sm py-2 px-1 border-slate-300 rounded-xl md:border-t-0 lg:rounded-b-xl lg:rounded-t-none hover:bg-black/20 hover:border-blue-500 hover:border-t-2 duration-200 border-2 flex items-center">
            <div className="flex-grow" style={{ display: 'inline-block' }}>
            <div className='flex-cols text-center'>
            <div className='font-bold dark:text-white text-xl sm:text-2xl md:text-2xl lg:text-3xl'>Humidity Chart</div>
            <div className='text-md dark:text-gray-500 text-sm sm:text-xs md:text-sm lg:text-xl'>(showing most recent humidity records)</div>
            </div>
                <canvas id="humidity-chart" style={{ width: '100%', height: '100%' }}></canvas>
            </div>
        </div>
    );
};

export default HumidityChart;
