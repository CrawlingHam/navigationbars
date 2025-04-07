import { ThemeSelector, AccountSwitch } from "../sections";
import { MenuContentItemsProps } from "@/types";
import MenuItems from "./MenuItems";

export default function MenuContentItems(props: MenuContentItemsProps) {
    return (
        <div className="flex flex-col gap-2 h-full">
            <AccountSwitch {...props} />
            <ThemeSelector {...props} />
            <MenuItems {...props} />
        </div>
    );
}
