import { socials } from "../constants/index.jsx";

const Footer = () => {
    return (
        <footer>
            <div className="container py-10 flex flex-col items-center gap-4">
                {/* Copyright */}
                <p className="opacity-70 text-sm text-center">
                    &copy; {new Date().getFullYear()} Nova Media. All rights reserved
                </p>

                {/* Terms of Use */}
                <a href="#" className="text-sm hover:underline text-center">
                    Terms of Use
                </a>

                {/* Social Icons */}
                <ul className="flex justify-center gap-4">
                    {socials.map(({ id, url, icon, title }) => (
                        <li key={id}>
                            <a href={url} className="hover:opacity-70">
                                <img
                                    src={icon}
                                    alt={title}
                                    className="w-6 h-6 object-contain"
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;