import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'chart.js/auto';

const TemperatureChart = () => {
    const [timestamps, setTimestamps] = useState([]);
    const [temperatures, setTemperatures] = useState([]);
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
            const tempTimestamps = sensorData.map(entry => {
                const date = new Date(entry.recorded_at);
                return date.toLocaleTimeString('en-US', { hour12: false });
            });
            const tempTemperatures = sensorData.map(entry => entry.temp);
            setTimestamps(tempTimestamps);
            setTemperatures(tempTemperatures);
        } catch (error) {
            console.error('Error fetching sensor data:', error);
        }
    };

    useEffect(() => {
        if (timestamps.length > 0 && temperatures.length > 0) {
            if (myChart) {
                myChart.destroy();
            }

            const ctx = document.getElementById('temperature-chart');
            const newChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: timestamps,
                    datasets: [{
                        label: 'Temperature',
                        backgroundColor: 'rgb(255, 255, 255)',
                        borderColor: 'rgb(59, 130, 246)',
                        data: temperatures,
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
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
                    responsive: true,
                    aspectRatio: 2,
                }
            });

            setMyChart(newChart);
        }
    }, [timestamps, temperatures]);

    return (
        <div className="relative p-5 hover:bg-black/20 py-2 px-1 rounded-xl lg:rounded-b-xl hover:border-t-2 lg:rounded-t-none md:border-t-0 shadow-sm hover:border-blue-500 duration-200 border-2 flex items-center">
            <div className="flex-grow" style={{ display: 'inline-block' }}>
                <div className='flex-cols text-center'>
                <div className='font-bold dark:text-white text-xl sm:text-2xl md:text-2xl lg:text-3xl'>Temperature Chart</div>
            <div className='text-md dark:text-gray-500 text-sm sm:text-xs md:text-sm lg:text-xl'>(showing most recent temperature records)</div>
            </div>
                <canvas id="temperature-chart" style={{ width: '100%', height: '100%' }}></canvas>
            </div>
        </div>
    );
};

export default TemperatureChart;
