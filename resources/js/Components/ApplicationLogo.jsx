export default function ApplicationLogo(props) {
    return (
        <img
            src="/image/Logo-Black.png" // Sesuaikan dengan path gambar di folder public
            alt="Application Logo"
            {...props} // Agar props seperti className bisa diteruskan
        />
    );
}
