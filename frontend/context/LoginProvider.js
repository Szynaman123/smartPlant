import React, { createContext, useContext, useState } from 'react';
import {Text} from 'react-native';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profile, setProfile] = useState({});

    const [isChosen, setIsChosen] = useState(false);
    const [idSpecies, setIdSpecies] = useState();

   // let profileName;
   //profileName = (<Text>{profile.firstname}</Text>);

    return (
        <LoginContext.Provider
            value={{ isLoggedIn, setIsLoggedIn, profile, setProfile,
                isChosen, setIsChosen, idSpecies, setIdSpecies }}
        >
            {children}
        </LoginContext.Provider>
        
    );
};

export const useLogin = () => useContext(LoginContext);
export const useId = () => useContext(LoginContext);

export default LoginProvider;
