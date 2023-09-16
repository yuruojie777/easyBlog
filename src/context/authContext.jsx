// AuthContext.js
import {createContext, useState, useContext, useEffect} from 'react';
import {auth, get} from "../service/ApiService";
import {message} from "antd";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [avatars, setAvatars] = useState([]);
    useEffect(() => {
        get(`/endpoint/ezblog/user/avatars`).then(
            (res) => {
                setAvatars(res.data);
                console.log(res);
            }
        )
    }, []);

    useEffect(() => {
        get(`/endpoint/ezblog/user`).then(
            (res) => {
                console.log(res.data);
                setUser(res.data);
            }
        )
    },[])

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
        <AuthContext.Provider value={{ user, avatars, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
