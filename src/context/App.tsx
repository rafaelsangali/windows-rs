import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';

import { Apps } from '../types/apps';
import { useTranslation } from 'react-i18next';

type AppContextProps = {
  openedApp: Apps | 'none';
  openApp: (app: Apps) => void;
  closeApp: () => void;
  localLanguage: 'pt' | 'en';
  setLocalLanguage: Dispatch<SetStateAction<'pt' | 'en'>>
  handleChangeLanguage: () => void
};

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [openedApp, setOpenedApp] = useState<Apps | 'none'>('none');
  const [localLanguage, setLocalLanguage] = useState<'en' | 'pt'>('pt');
  const { i18n: { changeLanguage } } = useTranslation();

  function handleChangeLanguage() {
    const newLanguage = localLanguage === 'pt' ? 'en' : 'pt';
    localStorage.setItem('language', newLanguage);
    changeLanguage(newLanguage);
    setLocalLanguage(newLanguage);
  }

  function closeApp() {
    setOpenedApp('none');
  }

  function openApp(app: Apps) {
    setOpenedApp(app);
  }

  useEffect(() => {
    const lang = localStorage.getItem('language') as 'en' | 'pt';
    setLocalLanguage(lang ?? 'pt');
    changeLanguage(lang ?? 'pt');
  }, []);

  return (
    <AppContext.Provider
      value={{
        openedApp,
        openApp,
        closeApp,
        localLanguage,
        setLocalLanguage,
        handleChangeLanguage
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
