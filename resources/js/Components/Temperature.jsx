import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
    const [temperature, setTemperature] = useState(null);
    const [humidity, setHumidity] = useState(null);

    useEffect(() => {
        fetchSensorData(); // Fetch initial data
        const intervalId = setInterval(fetchSensorData, 5000); // Poll every 5 seconds (adjust as needed)

        return () => {
            clearInterval(intervalId); // Cleanup interval when component unmounts
        };
    }, []);

    const fetchSensorData = async () => {
        try {
            const response = await axios.get('/api/temperature');
            setTemperature(response.data.temperature);
            setHumidity(response.data.humidity);
        } catch (error) {
            console.error('Error fetching sensor data:', error);
        }
    };

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className=" overflow-hidden shadow-sm">
                    <div className="grid grid-cols-2 gap-10 ">
                        <div className="rounded-xl bg-blue-500 p-10">
                            <p>Temperature</p>
                            <span>
                                {temperature !== null && `${temperature}°C`}
                            </span>
                        </div>
                        <div className="rounded-xl bg-blue-500 p-10">
                            <p>Humidity</p>
                            <span>
                                {humidity !== null && `${humidity}%`}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
