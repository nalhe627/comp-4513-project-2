import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
    return (
        <footer className="flex flex-col w-full bg-gray-100 flex min-h-25 justify-center items-center py-4">
            <a href="https://github.com/nalhe627/comp-4513-project-2/tree/main" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <p className="text-gray-500/80">Copyright &copy;</p>
        </footer>
    );
};

export default Footer;
