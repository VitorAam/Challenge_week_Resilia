import { createContext, useState } from "react";

export const estudanteContext = createContext([]);

export const estudanteProvider = ({ children }) => {
    const [estudante, setEstudante] = useState([]);

    return(
        <estudanteContext.Provider value={{ estudante, setEstudante }}>
            {children}
        </estudanteContext.Provider>
    )
}