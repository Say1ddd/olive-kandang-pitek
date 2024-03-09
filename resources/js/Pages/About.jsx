import NavLink from "@/Components/NavLink";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const About = ({ auth }) => {
  return (
    <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">About</h2>}>
      <Head title="About" />
      <NavLink href={route('dashboard')} active={route().current('dashboard')} />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <p>KANGTEK</p>
        <span className="line-through">KAndaNG piTEK</span>
        <span className="">KAndaNG TEKnologi</span>
        <p>is a platform to monitor and control various IoT devices.</p>
        <p>Ad non dolor commodo proident aute nulla sit. Eu aute pariatur cillum sint sunt officia. Aute incididunt nisi excepteur fugiat. Aliqua elit commodo consectetur laboris et deserunt adipisicing velit. Dolore nisi duis quis est cupidatat tempor in adipisicing magna.</p>
      </div>
    </AuthenticatedLayout>
  );
};

export default About;
