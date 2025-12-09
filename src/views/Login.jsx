import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../components/CartContext";
import { LoginContext } from "../components/LoginContext";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";

const Login = () => {
    const navigate = useNavigate();
    const { setLoggedIn } = useContext(LoginContext);

    /**
     * Attempts to sign the user in.
     * 
     * Since auth hasn't been implemented, this merely changes the Login context.
     * 
     * @param {Event} e Event that occurs when submitting a form
     */
    const signIn = (e) => {
        e.preventDefault();
        setLoggedIn(true);
        console.log("loggin in");
        navigate("/");
    };

    return (
        <Form className="mx-auto p-5 flex gap-5 items-center rounded-lg" onSubmit={signIn}>
            <p className="text-2xl font-bold">Login</p>
            <Input label="Email" isRequired type="email" />
            <Input label="Password" isRequired type="password" />
            <div className="flex flex-row gap-5 w-full justify-center">
                <Button color="primary" type="submit">Log in</Button>
                <Tooltip 
                    content="Registeration feature hasn't been added yet. Check back soon for this feature!" 
                    showArrow 
                    offset={5}
                >
                    <Button>Register</Button>
                </Tooltip>
            </div>
            <p className="text-gray-800/50 text-xs">
                Note: Authentication hasn't been implemented, so this login page is purely simulated.
            </p>
        </Form>
    );
}

export default Login;