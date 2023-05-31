import ApplicationLogo from '@/Components/ApplicationLogo';
import Welcome from '@/Components/Nav';
import Nav from '@/Components/Nav';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (

        <div>
            
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
          
            <div>
                <ApplicationLogo></ApplicationLogo>

            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-[#8CC7D7] shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
        </div>
    );
}
