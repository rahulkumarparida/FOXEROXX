import { children, createContext } from "react"


let LoginContext = createContext({children})
export default function LoginContextProvider(){

    return (
        <LoginContext.Provider  value="">
            {children}
        </LoginContext.Provider>
    );
}