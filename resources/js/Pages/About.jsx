import NavLink from "@/Components/NavLink";
import { Head } from "@inertiajs/react";
import Layout from '@/Layouts/Layout';

const About = ({ auth }) => {
  return (
    <Layout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">About</h2>}>
      <Head title="About" />
      <NavLink href={route('dashboard')} active={route().current('dashboard')} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white hover:bg-black hover:text-white duration-300 overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">Welcome to KANGTEK</h2>
            <p className="text-lg mb-4">KANGTEK stands for KAndaNG TEKnologi, a platform designed to monitor and control various IoT devices.</p>
            <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet ullamcorper nisi. Pellentesque euismod sapien quis turpis viverra, vitae tincidunt felis consectetur. Donec vel odio tincidunt, luctus libero nec, feugiat enim.</p>
            <p className="text-lg mb-4">Quisque ac dolor ac nisi feugiat mattis. Fusce fermentum dolor in sapien gravida condimentum. Nunc ut felis eu sem tincidunt vestibulum. Curabitur tristique urna id eros molestie, nec ullamcorper nunc laoreet.</p>
            <p className="text-lg">Sed et pharetra odio. Nullam dapibus felis eget consequat pharetra. Ut dictum lorem nec nulla blandit tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus vitae volutpat risus.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
