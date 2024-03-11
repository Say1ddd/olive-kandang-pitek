import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HumidityCard = () => {
    const [humid, setHumid] = useState(null);
    const [timestamp, setTimestamp] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/sensors');
            const humidData = response.data;
            if (humidData.length > 0) {
                const latestData = humidData[humidData.length - 1];
                setHumid(latestData.humid);
                const formattedTimestamp = new Date(latestData.recorded_at).toLocaleString();
                setTimestamp(formattedTimestamp);
            } else {
                setHumid(null);
                setTimestamp(null);
            }
        } catch (error) {
            console.error('Error fetching humid data:', error);
        }
    };

    useEffect(() => {
        fetchData();

        const intervalId = setInterval(fetchData, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="font-bold">
            <span className='text-7xl'>{humid !== null ? `${humid}%` : 'Loading...'}</span>
            <div>
                <span className='text-xl'>{timestamp !== null ? `${timestamp}` : ' - '}</span>
            </div>
        </div>
    );
};

export default HumidityCard;
