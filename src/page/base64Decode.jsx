import {useState} from "react";
import "../css/base64Decode.css";
export const Base64Decode = () => {
    const [raw, setRaw] = useState('');
    const [result, setResult] = useState('');
    const decode = (raw) => {
        try {
            const decodedData = atob(raw);
            const decoder = new TextDecoder();
            const decodedChineseString = decoder.decode(new Uint8Array([...decodedData].map((char) => char.charCodeAt(0))));
            setResult(decodedChineseString);
        } catch (ignore) {
            alert("Can not decode");
        }
    }
    const encode = (raw) => {
        try {
            const encoder = new TextEncoder();
            const data = encoder.encode(raw);
            const encode = btoa(String.fromCharCode(...data));
            setResult(encode);
        } catch (ignore) {}
    }
    return (
        <div>
            <h3>Base64 En/Decode page!</h3>
            <div>
                <textarea placeholder="base64/plain text" onChange={(e) => {setRaw(e.target.value)}}></textarea>
            </div>
            <div>
                <button onClick={() => {encode(raw)}}>encode</button>
                <button onClick={() => {decode(raw)}}>decode</button>
            </div>
            <div>{result}</div>
        </div>
    )
}