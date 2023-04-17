import { Center, Spinner } from "native-base";
export function Loading() {
    return (React.createElement(Center, { flex: 1, bg: "gray.900" },
        React.createElement(Spinner, { color: "yellow.500" })));
}
