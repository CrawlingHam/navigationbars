import { Navigationbar } from "@/components";
import { NavigationbarProps } from "@/types";
import { Provider } from "react-redux";
import { store } from "@/stores";

export default function NavigationbarWrapper(props: NavigationbarProps) {
    return (
        <Provider store={store}>
            <Navigationbar {...props} />
        </Provider>
    );
}
