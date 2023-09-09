// AuthContext.js
import { createContext, useState, useContext } from 'react';
import {auth} from "../service/ApiService";
import {message} from "antd";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (form) => {
        auth(form).then(
            res => {
                if(res.status === 200) {
                    // setUser(res.data.email)
                    // console.log(res.data);
                    message.success("Successfully login").then(() => {
                        window.location.assign("/");
                    })
                }
            }
        ).catch(e => {
            message.error("Failed to login");
        })
    }

    const logout = () => {
        // Perform logout logic, e.g., clear user data from local storage.
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
