import { Center } from "native-base";
import Logo from "../assets/logo.svg";
import { Button } from "../components/Button";
export function SignIn() {
    return (React.createElement(Center, { flex: 1, bgColor: "gray.900" },
        React.createElement(Logo, { width: 212, height: 40 }),
        React.createElement(Button, null)));
}
