import ApplicationLogo from '@/Components/svg/ApplicationLogo';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            <div className='flex justify-center items-center'>
                <ApplicationLogo className="w-12 h-12 fill-current text-gray-100" />
                <div className='text-2xl font-bold bg-gradient-to-r from-white to-sky-300 text-transparent bg-clip-text'>KANGTEK</div>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
