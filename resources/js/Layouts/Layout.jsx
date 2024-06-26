import { useState } from 'react';
import ApplicationLogo from '@/Components/svg/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import Dropdown from '@/Components/Dropdown';
import Footer from '@/Components/Footer';
import { HiClipboard, HiHome, HiOutlineLogin, HiOutlineLogout, HiOutlineMenu, HiQuestionMarkCircle } from 'react-icons/hi'

export default function Layout({ user, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center my-5">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-100" />
                                <div className='font-bold text-2xl bg-gradient-to-r from-white text-transparent bg-clip-text to-sky-400 ml-2'>KANGTEK</div>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                >
                                    <HiHome className='h-4 mb-1 mr-1 w-4'/>
                                    Dashboard
                                </NavLink>
                                <NavLink
                                    href={route('sensor')}
                                    active={route().current('sensor')}
                                >
                                    <HiClipboard className='h-4 mb-1 mr-1 w-4'/>
                                    Manage (login required)
                                </NavLink>
                                <NavLink
                                    href={route('about')}
                                    active={route().current('about')}
                                >
                                    <HiQuestionMarkCircle className='h-4 mb-1 mr-1 w-4'/>
                                    About
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            {user && (
                                <div className="ms-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {user.name}

                                                    <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                            <Dropdown.Link href={route('logout')} method="post" as="button">
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            )}

                            {!user && (
                                <div className="ms-3">
                                    <NavLink href={route('login')}>
                                    <HiOutlineLogin className='h-4 w-4 mr-2' />
                                        Login
                                    </NavLink>
                                </div>
                            )}
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                            >
                                <HiOutlineMenu className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                        <HiHome className='h-4 mr-1 w-4 mt-0.5'/>
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('sensor')} active={route().current('sensor')}>
                        <HiClipboard className='h-4 mr-1 w-4 mt-0.5'/>
                            Manage (require login)
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('about')} active={route().current('about')}>
                        <HiQuestionMarkCircle className='h-4 mr-1 w-4 mt-0.5'/>
                            About
                        </ResponsiveNavLink>
                    </div>

                    {user && (
                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="px-4">
                                <div className="font-medium text-base text-gray-800 dark:text-gray-200">{user.name}</div>
                                <div className="font-medium text-sm text-gray-500">{user.email}</div>
                            </div>

                            <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                            <HiOutlineLogout className='h-4 w-4 mr-2' />
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                    )}
                </div>
            </nav>

            <main>{children}</main>
            <Footer />
        </div>
    );
}
