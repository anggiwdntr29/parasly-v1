import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            backgroundImage: {
                ring: "url('/public/image/image-1.png')",
                ring1: "url('/public/image/ring.png')",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                black: "#232323",
                primary: "#FFFFFF",
                secondary: "#27A3AB",
                accent: "#D0FE68",
                text: "#000000",
                gray: "#F0F0F0",
                text_gray: "#888888",
                green: "#00BE1E",
                red: "#D60000",
            },
        },
    },

    plugins: [forms],
};
