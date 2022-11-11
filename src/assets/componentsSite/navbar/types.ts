    import { ReactNode } from "react";

interface INavbarProviderProps {
  children: ReactNode;
}
interface INavbarContextData {
  handleNavigate: (path: string) => void;
}

export type { INavbarProviderProps, INavbarContextData }