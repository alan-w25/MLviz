import Link from "next/link";


const date_map = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
};

const Footer = () => (

    <footer className = "text-center p-4">
        <p>Copyright &copy; 
            
            <Link href="https://www.alan-wu.me" className="hover:underline"> Alan Wu </Link>
            
            {new Date().getFullYear()} Last updated {date_map[new Date().getMonth()]} {new Date().getDate()}, {new Date().getFullYear()}</p>
    </footer>
);

export default Footer;