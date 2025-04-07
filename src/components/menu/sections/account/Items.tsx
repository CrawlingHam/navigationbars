import { AccountItemsProps } from "@/types";
import { AccountCard } from "./Card";
import { cn } from "@/utils";

export const AccountItems = (props: AccountItemsProps & { className?: string }) => (
    <div className={cn(props.className, "flex flex-col gap-2")}>
        {props.accounts
            .filter(Boolean)
            .sort((a, b) => {
                if (a.id === props.currentAccount?.id) return -1;
                if (b.id === props.currentAccount?.id) return 1;
                return 0;
            })
            .map((account, index) => (
                <div key={`account-${account.id}-${index}`} className="relative rounded-lg bg-[rgba(255,255,255,0.05)] p-2">
                    <div className="relative rounded-lg border-2 border-transparent bg-[linear-gradient(90deg,hsl(219,100%,65%)_0%,hsl(190,100%,50%)_30%,transparent_100%)] bg-[length:200%_100%] bg-[position:0_0] transition-[background-position] duration-600 ease-in-out hover:bg-[position:100%_0] opacity-80 [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [-webkit-mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:xor] [mask-composite:exclude]">
                        <AccountCard account={account} isCurrentUser={props.currentAccount?.id === account.id} />
                    </div>
                </div>
            ))}
    </div>
);
