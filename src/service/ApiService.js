import axios from "axios";
import Cookies from "universal-cookie/es6";
import {URL_CONFIG} from "../config/urlConfig";
import alert from "../component/alert/alert";
const BASE_URL = URL_CONFIG
const HEADER = {
    "Authorization": "Bearer " + new Cookies().get("token")
}
export const get = async (uri) => {
    return await axios.get(BASE_URL+uri, {headers: HEADER})
}

export const post = async (uri, body) => {
    return await axios.post(BASE_URL + uri, body, {headers: HEADER})
}

export const put = async (uri, body) => {
    return await axios.put(BASE_URL + uri, body, {headers: HEADER})
}

export const del = async (uri) => {
    return await axios.delete(BASE_URL + uri, {headers: HEADER})
}

export const auth = (form) => {
    axios.post(BASE_URL + "/auth/authenticate", form).then(
        res => {
            if(res.status === 200) {
                const cookie = new Cookies();
                cookie.set("token", res.data.token, {path: '/', secure: true, maxAge : 3600 * 24})
                cookie.set("uid", res.data.uid, {path: '/', secure: true, maxAge : 3600 * 24})
                window.location = ("/");
            }
        }
    ).catch(e => {
        alert("Authentication failed: " + e);
    })
}

export const register = (form) => {
    axios.post(BASE_URL + "/auth/register", form).then(
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