import React, { useState, useEffect } from 'react';
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import TemperatureCard from '@/Components/TemperatureCard';
import TemperatureChart from '@/Components/TemperatureChart';
import HumidityCard from '@/Components/HumidityCard';
import TemperatureSVG from '@/Components/svg/TemperatureSVG';
import HumiditySVG from '@/Components/svg/HumiditySVG';
import HumidityChart from '@/Components/HumidityChart';

export default function Sensor({ auth }) {
    const handleTerminate = () => {
    };

    return (
        <Layout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Sensor</h2>
                    <div className="flex items-center space-x-4">
                        <button onClick={handleTerminate} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
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
                            <div className="relative rounded-xl shadow-sm bg-slate-200 p-5 border-slate-300 hover:border-blue-500 duration-300 border-solid border-2 flex items-center">
                                <div className="flex-grow">
                                    <p className='font-bold text-3xl'>Temperature</p>
                                    <TemperatureCard />
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                                    <TemperatureSVG />
                                </div>
                            </div>
                            <div className="relative rounded-xl shadow-sm bg-slate-200 p-5 border-slate-300 hover:border-blue-500  duration-300 border-solid border-2 flex items-center">
                                <div className="flex-grow">
                                    <p className='font-bold text-3xl'>Humidity</p>
                                    <HumidityCard />
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                                    <HumiditySVG />
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
