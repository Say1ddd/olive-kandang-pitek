import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Humidity = () => {
    const [humidity, setHumidity] = useState(null);

    useEffect(() => {
        fetchHumidity();
        const intervalId = setInterval(fetchHumidity, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const fetchHumidity = async () => {
        try {
            const response = await axios.get('/api/sensors');
            const { humidity } = response.data;

            setHumidity(humidity);
        } catch (error) {
            console.error('Error fetching humidity data:', error);
        }
    };

    return (
        <div className="py-5">
            <span className='text-2xl font-bold'>{humidity !== null ? `Value : ${humidity}%` : 'Loading...'}</span>
        </div>
    );
};

export default Humidity;
