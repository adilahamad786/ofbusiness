import { createContext, useState } from "react";

const UserContext = createContext({
    token : '',
    isLogedIn : false,
    setLogedIn : (token) => {},
    setLogedOut : () => {},
});


export const UserContextProvider = (props) => {
    const [user, setUser] = useState([]);

    const setUserData = (data) => {
        setUser(data)
    }

    return <UserContext.Provider value={{
        user,
        setUserData
    }}>
        {props.children}
    </UserContext.Provider>
}

export default UserContext;