import { Button } from "@heroui/button";
import { 
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
 } from "@heroui/modal";

const AboutModal = ({ isOpen, onOpenChange }) => {
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader>About This Project</ModalHeader>
                        <ModalBody>
                            Hello
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