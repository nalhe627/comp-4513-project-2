import { useState, useContext } from "react";
import { CartContext } from "../components/CartContext";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

const Login = () => {
    const { cart, setCart } = useContext(CartContext);

    return (
        <Form className="mx-auto p-5 flex gap-5 items-center rounded-lg">
            <p className="text-2xl font-bold">Login</p>
            <Input label="Email" isRequired type="email" />
            <Input label="Password" isRequired type="password" />
            <div className="flex flex-row gap-5 w-full justify-center">
                <Button color="primary" type="submit">Log in</Button>
                <Button>Register</Button>
            </div>
            <p className="text-gray-800/50 text-xs">Note: Authentication hasn't been implemented, so this login page is purely simulated</p>
        </Form>
    );
}

export default Login;