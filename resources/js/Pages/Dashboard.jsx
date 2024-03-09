import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Temperature from '@/Components/Temperature';

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
                        <div className="grid grid-cols-2 gap-10 ">
                            <div className="rounded-xl bg-blue-500 p-10">
                                <p>Temperature</p>
                                <span>
                                    <Temperature />
                                </span>
                            </div>
                            <div className="rounded-xl bg-blue-500 p-10">
                                <p>Humudity</p>
                                <span>
                                    50<sup>%</sup>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
