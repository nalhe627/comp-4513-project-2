import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { 
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
 } from "@heroui/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const AboutModal = ({ isOpen, onOpenChange }) => {
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader>About This Site</ModalHeader>
                        <ModalBody>
                            <p className="mb-5">This e-commerce site was completed as a project for the second assignment in COMP 4513 at Mount Royal University.</p>
                            <p className="mb-5">The project utilizes JavaScript, Node, React, Tailwind CSS, Vite, and components courtesy of <Link showAnchorIcon href="https://www.heroui.com/" isExternal underline="always" color="foreground" className="font-medium">HeroUI.</Link></p>
                            <p className="mb-5">
                                <span className="font-semibold">Group Member Names: </span>
                                <span>Norris Alhejji, Justin Nunez</span>
                            </p>
                            <Link 
                                href="https://github.com/nalhe627/comp-4513-project-2" 
                                isExternal underline="always" 
                                color="foreground" 
                                className="font-medium"
                            >
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                                Github Repository
                            </Link>
                        </ModalBody>
                        <ModalFooter>
                            <Button 
                                color="danger" 
                                variant="ghost" 
                                onPress={onClose}
                            >
                                Close
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );    
}

export default AboutModal;