import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { LoginContext } from "../components/LoginContext";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

const Login = () => {
    const { cart, setCart } = useContext(CartContext);
    const { loggedIn, setLoggedIn } = useContext(LoginContext);

    const signIn = (e) => {
        e.preventDefault();
        setLoggedIn(true);
    };

    return (
        <Form className="mx-auto p-5 flex gap-5 items-center rounded-lg" onSubmit={signIn}>
            <p className="text-2xl font-bold">Login</p>
            <Input label="Email" isRequired type="email" />
            <Input label="Password" isRequired type="password" />
            <div className="flex flex-row gap-5 w-full justify-center">
                <Button color="primary" type="submit">Log in</Button>
                <Button>Register</Button>
            </div>
            <p className="text-gray-800/50 text-xs">
                Note: Authentication hasn't been implemented, so this login page is purely simulated
            </p>
        </Form>
    );
}

export default Login;