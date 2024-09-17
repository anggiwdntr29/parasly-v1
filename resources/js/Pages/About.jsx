import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout"; // Pastikan path ini benar

const About = () => {
    return (
        <GuestLayout>
            <Head title="About" />
            <h1>Ini About</h1>
        </GuestLayout>
    );
};

export default About;
