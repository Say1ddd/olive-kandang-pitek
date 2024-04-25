import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import TemperatureCard from '@/Components/TemperatureCard';
import TemperatureChart from '@/Components/chart/TemperatureChart';
import HumidityCard from '@/Components/HumidityCard';
import TemperatureSVG from '@/Components/svg/TemperatureSVG';
import HumiditySVG from '@/Components/svg/HumiditySVG';
import HumidityChart from '@/Components/chart/HumidityChart';

export default function Dashboard({ auth }) {
    return (
        <Layout
            user={auth.user}
        >
            <Head title="Dashboard" />

            <div className="py-8">
                <div className='text-center text-gray-300 font-semibold sm:text-2xl md:text-2xl'>{route().current().toUpperCase()}</div>
                <div className='text-center text-gray-700 mb-2 text-xs md:text-sm'>Listening to <span className='font-bold text-gray-500'>sensor</span> endpoint</div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                    <div className="bg-black/10 p-5 rounded-3xl grid xs:grid-cols-1 lg:grid-cols-2 gap-y-4 md:gap-x-4 md:gap-y-0">
                            <div className="relative rounded-xl lg:rounded-t-xl lg:rounded-b-none shadow-sm p-5 md:border-b-0 hover:border-b-2 hover:bg-black/20 border-slate-300 hover:border-blue-500 duration-200 border-2 flex items-center">
                                <div className="flex-grow">
                                    <p className='font-bold dark:text-white text-xl sm:text-2xl md:text-2xl lg:text-3xl'>Temperature</p>
                                    <TemperatureCard />
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-4 dark:text-white">
                                    <TemperatureSVG className="fill-blue-300 w-auto h-16 sm:h-20 lg:h-24"/>
                                </div>
                            </div>
                            <div className="relative rounded-xl lg:rounded-t-xl lg:rounded-b-none shadow-sm p-5 md:border-b-0 hover:border-b-2 hover:bg-black/20 border-slate-300 hover:border-blue-500 duration-200 border-2 flex items-center">
                                <div className="flex-grow">
                                    <div className='font-bold dark:text-white text-xl sm:text-2xl md:text-2xl lg:text-3xl'>Humidity</div>
                                    <HumidityCard />
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                                    <HumiditySVG className="fill-blue-300 w-auto h-16 sm:h-20 lg:h-24"/>
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
