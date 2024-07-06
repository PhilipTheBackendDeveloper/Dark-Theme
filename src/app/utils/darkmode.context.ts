import { Context, createContext } from 'react';

type DarkModeContextValue = {
  isDarkMode: boolean;
  useDeviceSettings: boolean;
  setIsDarkMode: (prev: boolean) => void;
  setUseDeviceSettings: (prev: boolean) => void;
};

const DarkMode: Context<DarkModeContextValue> =
  createContext<DarkModeContextValue>({
    isDarkMode: false,
    setIsDarkMode: () => {},
    setUseDeviceSettings: () => {},
    useDeviceSettings: false,
  });

export default DarkMode;
