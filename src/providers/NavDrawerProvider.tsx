import { createContext, useState } from 'react';

interface NavDrawerContextType {
  state: {
    isNavOpen: boolean;
  };
  actions: {
    toggle: () => void;
  };
}

export const NavDrawerContext = createContext<NavDrawerContextType>({
    state: {
        isNavOpen: false,
    },
    actions: {
        toggle: () => {},
    },
});

export const NavDrawerProvider = ({ children }: { children: React.ReactNode }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    return <NavDrawerContext.Provider value={{ state: { isNavOpen }, actions: { toggle } }}>{children}</NavDrawerContext.Provider>;
};

