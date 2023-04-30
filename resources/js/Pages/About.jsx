import NavLink from "@/Components/NavLink";
import { Head } from "@inertiajs/react";
import Layout from '@/Layouts/Layout';
import ListComponent from "@/Components/ListComponent";

const About = ({ auth }) => {
  const members = [
    { name: 'Kayla Aprilia Islamy Putri', as: 'Product Designer'},
    { name: 'Marsha Nafisa Putri', as: 'Product Engineer'},
    { name: 'Muhammad Abdul Aziz', as: 'Database Engineer'},
    { name: 'Muhammad Rasyid', as: 'Product Engineer'},
    { name: 'Naufalikho Abyan', as: 'Programmer'},
    { name: 'Sajid Muhammad Ikhlas', as: 'Developer'},
    { name: 'Zulham Daninoor', as: 'DevOps'},
  ]

  return (
    <Layout
    user={auth.user}
    header={<h2 className="font-semibold text-xl text-gray-800 dark:text-white leading-tight">About</h2>}
>
    <Head title="About" />

      <NavLink href={route('dashboard')} active={route().current('dashboard')} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-black/20 dark:text-white hover:text-white duration-300 overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6">
          <div className="text-3xl font-bold mb-4">Welcome to KANGTEK</div>
          <div className="text-lg mb-4">KANGTEK stands for KAndaNG TEKnologi, a platform designed to monitor and control IoT devices. This platform integrates advanced sensors, data analytics, and machine learning algorithms to provide real-time insights and automate various processes, enabling businesses to optimize their operations, improve efficiency, and enhance decision-making capabilities, ultimately leading to increased productivity and competitiveness in today's rapidly evolving technological landscape.</div>
          <ListComponent members={members} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
