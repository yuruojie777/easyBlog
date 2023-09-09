import {useState} from "react";
import "../css/jsonPrettify.css";
export const JsonPrettify = () => {
    const [rawJson, setRawJson] = useState('');
    const [result, setResult] = useState('');
    const [valid, setValid] = useState(true);
    const convert = (value) => {
        try {
            setResult(JSON.stringify(JSON.parse(value), null, 2));
            setValid(true);
        } catch (e) {
            setValid(false);
        }

    }
    return (
        <div>
            <h3>Json prettify</h3>
            <textarea className="json-raw-box" placeholder="JSON to prettify" onChange={(e) => convert(e.target.value)}></textarea>
            {/*<button onClick={convert}>convert</button>*/}
            <textarea className="json-result-box" placeholder="Result..." value={result} readOnly={true}></textarea>
            <div style={{fontWeight: "bolder", color: valid?'green':'red'}}>{valid?'Valid':'Invalid'}</div>
        </div>
    )
}