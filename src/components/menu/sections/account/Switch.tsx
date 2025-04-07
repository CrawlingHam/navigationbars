import { AccountSwitchProps } from "@/types";
import { AccountActions } from "./Actions";
import { BackButton } from "@/components";
import { AccountItems } from "./Items";
import { Fragment, memo } from "react";

export const AccountSwitch = memo(function AccountSwitch(props: AccountSwitchProps) {
    const { item, accountMenuOpen, toggleAccountMenu, itemIndex, user } = props;
    if (!accountMenuOpen || !item.savedAccounts) return null;

    return (
        <Fragment key={`account-switch-${itemIndex}`}>
            <div className="flex flex-col gap-y-3 max-h-[calc(100vh-64px)] overflow-y-auto">
                <BackButton buttonText="Accounts" onClick={() => toggleAccountMenu()} />
                <AccountItems accounts={item.savedAccounts} currentAccount={user} />
                <AccountActions />
            </div>
        </Fragment>
    );
});
