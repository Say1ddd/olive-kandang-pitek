import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Temperature from '@/Components/Temperature';
import Humidity from '@/Components/Humidity';
import TemperatureSVG from '@/Components/svg/TemperatureSVG';
import HumiditySVG from '@/Components/svg/HumiditySVG';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" overflow-hidden shadow-sm">
                        <div className="grid grid-cols-2 gap-10">
                            <div className="relative rounded-xl bg-slate-200 p-5 border-slate-300 hover:border-blue-500 duration-300 border-solid border-2 flex items-center">
                                <div className="flex-grow">
                                    <p className='font-bold text-3xl'>Temperature</p>
                                    <Temperature />
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                                    <TemperatureSVG />
                                </div>
                            </div>
                            <div className="relative rounded-xl bg-slate-200 p-5 border-slate-300 hover:border-blue-500 duration-300 border-solid border-2 flex items-center">
                                <div className="flex-grow">
                                    <p className='font-bold text-3xl'>Humidity</p>
                                    <Humidity />
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                                    <HumiditySVG />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
