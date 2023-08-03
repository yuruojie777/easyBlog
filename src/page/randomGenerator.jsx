import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
export const RandomGenerator = () => {
    const [range, setRange] = useState(100);
    const [num, setNum] = useState(null);
    const [uuid, setUuid] = useState('');
    const convert = () => {
        setNum(Math.floor(Math.random() * range));
    }
    const uuidGenerate = () => {
        setUuid(uuidv4());
    }
    return (
        <div>
            <div style={{height: 200}}>
                <h3>Random Number</h3>
                <input type="number" onChange={(e) => setRange(e.target.value)}></input>
                <button onClick={convert}>generate</button>
                <div style={{fontWeight: "bolder", fontSize: 32}}>{num}</div>
            </div>
            <div>
                <h3>Random UUID</h3>
                <button onClick={uuidGenerate}>generate</button>
                <div style={{fontWeight: "bolder", fontSize: 24}}>{uuid}</div>
            </div>
        </div>
    )
}