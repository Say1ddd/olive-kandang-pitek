import React, { useState, useEffect } from 'react';
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import TemperatureCard from '@/Components/TemperatureCard';
import TemperatureChart from '@/Components/chart/TemperatureChart';
import HumidityCard from '@/Components/HumidityCard';
import TemperatureSVG from '@/Components/svg/TemperatureSVG';
import HumiditySVG from '@/Components/svg/HumiditySVG';
import HumidityChart from '@/Components/chart/HumidityChart';

export default function Sensor({ auth }) {
    const handleTerminate = () => {
        if (confirm('Are you sure you want to terminate the sensor?')) {
            axios.delete('/api/sensor/terminate')
                .then(() => {
                    alert('Sensor terminated successfully.');
                })
                .catch((error) => {
                    console.error('Error terminating sensor:', error);
                    alert('Error terminating sensor. Please try again.');
                });
        }
    };

    return (
        <Layout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Sensor</h2>
                    <div className="flex items-center">
                        <button onClick={handleTerminate} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded">
                            Terminate
                        </button>
                    </div>
                </div>
            }
        >
            <Head title="Sensor" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <div className="grid grid-cols-2 gap-10">
                        <div className="relative rounded-xl shadow-sm bg-transparent p-5 hover:bg-black/20 border-slate-300 hover:border-blue-500 duration-300 border-solid border-2 flex items-center">
                                <div className="flex-grow">
                                    <p className='font-bold text-3xl dark:text-white'>Temperature</p>
                                    <TemperatureCard />
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                                    <TemperatureSVG className="fill-blue-300" />
                                </div>
                            </div>
                            <div className="relative rounded-xl shadow-sm bg-transparent p-5 hover:bg-black/20 border-slate-300 hover:border-blue-500 duration-300 border-solid border-2 flex items-center">
                                <div className="flex-grow">
                                    <p className='font-bold text-3xl dark:text-white'>Humidity</p>
                                    <HumidityCard />
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                                    <HumiditySVG className="fill-blue-300"/>
                                </div>
                            </div>
                            <TemperatureChart />
                            <HumidityChart />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
