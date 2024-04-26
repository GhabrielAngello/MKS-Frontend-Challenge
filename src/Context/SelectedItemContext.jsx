import React, {createContext, useState} from "react";

export const SelectedItemContext = createContext();

function SelectedItemProvider({children}) {
    const [selectItems, setSelectItems] = useState([]);
    
    return(
        <SelectedItemContext.Provider value={{selectItems, setSelectItems}}>
            {children}
        </SelectedItemContext.Provider>
    )
}

export default SelectedItemProvider;