import NavLink from "@/Components/NavLink";
import { Head } from "@inertiajs/react";
import Layout from '@/Layouts/Layout';
import ListComponent from "@/Components/ListComponent";

const About = ({ auth }) => {
  const members = [
    { name: 'Kayla Aprilia Islamy Putri', as: 'Designer'},
    { name: 'Marsha Nafisa Putri', as: 'Producer'},
    { name: 'Muhammad Abdul Aziz', as: 'DBA'},
    { name: 'Muhammad Rasyid', as: 'Producer'},
    { name: 'Naufalikho Abyan', as: 'Programmer'},
    { name: 'Sajid Muhammad Ikhlas', as: 'Developer'},
    { name: 'Zulham Daninoor', as: 'DevOps'},
  ]

  return (
    <Layout
    user={auth.user}
>
    <Head title="About" />

      <NavLink href={route('dashboard')} active={route().current('dashboard')} />
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="bg-black/20 dark:text-white hover:text-white duration-300 overflow-hidden shadow-sm p-4 sm:rounded-lg">
          <div className="p-2">
          <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center">Welcome to <span className=" bg-gradient-to-r from-white to-sky-300 bg-clip-text text-transparent">KANGTEK</span></div>
          <div className="text-sm text-justify md:text-md lg:text-lg mb-4">KANGTEK stands for KAndaNG TEKnologi, a platform designed to monitor and control IoT devices. This platform integrates advanced sensors, data analytics, and machine learning algorithms to provide real-time insights and automate various processes, enabling businesses to optimize their operations, improve efficiency, and enhance decision-making capabilities, ultimately leading to increased productivity and competitiveness in today's rapidly evolving technological landscape.</div>
          <ListComponent members={members} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
