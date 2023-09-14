import { createContext, useState } from "react";
import { data } from "../data";

export  const  AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({children}) => {
     // eslint-disable-next-line no-undef
     const [people, setPeople] = useState(data);
    return (<AppContext.Provider value={{
        people,
        setPeople,
    }}>
        {children}
    </AppContext.Provider>
    )
}