import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Temperature = () => {
    const [temperature, setTemperature] = useState(null);

    useEffect(() => {
        fetchTemperature();
        const intervalId = setInterval(fetchTemperature, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const fetchTemperature = async () => {
        try {
            const response = await axios.get('/api/sensors');
            const { temperature } = response.data;

            setTemperature(temperature);
        } catch (error) {
            console.error('Error fetching temperature data:', error);
        }
    };

    return (
        <div className="py-5">
            <span className='text-2xl font-bold'>{temperature !== null ? `Value : ${temperature}°C` : 'Loading...'}</span>
        </div>
    );
};

export default Temperature;
