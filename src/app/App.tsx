import { Brand, Menu } from "@/components";
import { useState, type JSX } from "react";
import type { AppProps } from "@/types";

function App(props: AppProps): JSX.Element {
    const [themeMenuOpen, setThemeMenuOpen] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <nav className="fixed left-0 right-0 top-0 z-50 w-full shadow-md h-16">
            <div className="w-full flex animated-border-b">
                <div className="flex w-full items-center justify-between">
                    <Brand logo={props.logo} title={props.title} />

                    <div className="flex justify-end mr-8 rounded-full">
                        <Menu
                            toggleThemeMenu={() => setThemeMenuOpen(!themeMenuOpen)}
                            toggleMenu={() => setMenuOpen(!menuOpen)}
                            themeMenuOpen={themeMenuOpen}
                            navbarMenuOpen={menuOpen}
                            profile={props.profile}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default App;
