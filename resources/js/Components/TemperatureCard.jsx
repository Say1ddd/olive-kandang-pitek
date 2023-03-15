import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TemperatureCard = () => {
    const [temp, setTemp] = useState(null);
    const [timestamp, setTimestamp] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/sensors');
            const tempData = response.data;
            if (tempData.length > 0) {
                const latestData = tempData[tempData.length - 1];
                setTemp(latestData.temp);
                const formattedTimestamp = new Date(latestData.recorded_at).toLocaleString();
                setTimestamp(formattedTimestamp);
            } else {
                setTemp(null);
                setTimestamp(null);
            }
        } catch (error) {
            console.error('Error fetching temp data:', error);
        }
    };

    useEffect(() => {
        fetchData();

        const intervalId = setInterval(fetchData, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="font-bold">
            <span className='text-7xl'>{temp !== null ? `${temp}°C` : 'Loading...'}</span>
            <div>
                <span className='text-xl'>{timestamp !== null ? `${timestamp}` : ' - '}</span>
            </div>
        </div>
    );
};

export default TemperatureCard;
