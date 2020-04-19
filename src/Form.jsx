import React, { useState } from 'react';
import MainInfo from './MainInfo';
import Skils from './Skils';

export const FormContext = React.createContext();
//para compartir informacion todos tienen que estar dentro del componenete provider

export default (props) => {
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const [skills, setSkills] =useState("");
return(
    <form >
        <FormContext.Provider value={{email, password, skills, setEmail, setPassword, setSkills}}>
                <MainInfo></MainInfo>
                <Skils></Skils>
                <div>
                    <p>Email: {email} </p>
                    <p>Contraseña: {password} </p>
                    <p>Lenguajes: {skills} </p>
                </div>
        </FormContext.Provider>
    </form>
)
}