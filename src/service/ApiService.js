import axios from "axios";
import Cookies from "universal-cookie/es6";
import alert from "../component/alert/alert";
const BASE_URL = process.env.REACT_APP_URL
const HEADER = {
    "Authorization": "Bearer " + new Cookies().get("token")
}

export const refreshToken = () => {
    instance.get(`/endpoint/ezblog/auth/refresh`).catch(() => {

        window.location.assign("/login");
    })
}

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const setAuthHeader = () => {
    // const token = new Cookies().get("token");
    // instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
export const get = async (uri) => {
    setAuthHeader();
    return instance.get(uri).catch(() => {
        // window.location.assign("/login");
    });
}

export const post = async (uri, body) => {
    setAuthHeader();
    // refreshToken();
    return instance.post( uri, body).catch(() => {
        window.location.assign("/login");
    })
}

export const put = async (uri, body) => {
    setAuthHeader();
    // refreshToken();
    return instance.put(uri, body)
}

export const del = async (uri) => {
    setAuthHeader();
    // refreshToken();
    return await axios.delete(BASE_URL + uri, {headers: HEADER})
}

export const auth = (form) => {
    return instance.post("/endpoint/ezblog/auth/login", form);
}

export const register = (form) => {
    instance.post("/endpoint/ezblog/auth/register", form).then(
        res => {
            if(res.status === 200) {
                const cookie = new Cookies();
                cookie.set("token", res.data.token, {path: '/', secure: true, maxAge : 3600 * 24})
                window.location = ("/");
            }
        }
    ).catch(e => {
        alert("Something unexpected happened: " + e);
    })
}