import type { SidebarContextProps } from "@/types";
import { createContext } from "reka-ui";

export const [useSidebar, provideSidebarContext] = createContext<SidebarContextProps>("Sidebar");
