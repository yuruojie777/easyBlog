import {useState} from "react";
import "../css/bcyptGenerator.css";
import {CopyOutlined} from "@ant-design/icons";
import {message} from "antd";

export const BcryptGenerator = () => {
    const [num, setNum] = useState(10);
    const [plainText, setPlainText] = useState('');
    const [comparePlain, setComparePlain] = useState('');
    const [compareHash, setCompareHash] = useState('');
    const [result, setResult] = useState('');
    const [match, setMatch] = useState('');
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const bcrypt = require('bcryptjs');
    async function hashPassword(plaintextPassword) {
        try {
            const salt = await bcrypt.genSalt(num);
            return await bcrypt.hash(plaintextPassword, salt);
        } catch (err) {
            console.error('Error hashing password:', err);
            throw err;
        }
    }
    async function comparePasswords(plaintextPassword, hash) {
        try {
            return await bcrypt.compare(plaintextPassword, hash);
        } catch (err) {
            console.error('Error comparing passwords:', err);
            throw err;
        }
    }
    const handleOnEncrypt = async () => {
        setLoading(true);
        await hashPassword(plainText).then((result) => {
            setResult(result);
        }).finally(() => {
            setLoading(false);
        })
    }
    const handleOnDecrypt = async () => {
        setLoading2(true);
        await comparePasswords(comparePlain, compareHash).then((result) => {
            if(result) {
                setMatch("Matched");
            } else {
                setMatch("Not matched");
            }
        }).finally(() => {
            setLoading2(false);
        })
    }
    const handleOnCopy = () => {
        navigator.clipboard.writeText(result)
            .then(r => message.success("Copied"));
    }
    return (
        <div className="bcrypt-container">
            <h3>Encrypt</h3>
            <div className="encrypt-box">
                <div className="encrypt-input-box">
                    <input placeholder="String needs to encrypt" onChange={e => setPlainText(e.target.value)}/>
                    <div className="count-box">
                        <button onClick={() =>{ if(num > 1) setNum(num => num - 1)}}>-</button>
                        <span>{num}</span>
                        <button onClick={() => {if(num < 99) setNum(num => num + 1)}}>+</button>
                    </div>
                    <button onClick={handleOnEncrypt}>{loading?"wait...":"encrypt"}</button>
                </div>
                <div className="encrypt-result-box">
                    <input value={result} readOnly={true}></input>
                    <CopyOutlined id="copy-icon" onClick={handleOnCopy}/>
                </div>
            </div>
            <h3>Decrypt</h3>
            <div className="decrypt-box">
                <div className="decrypt-input-box">
                    <div>
                        <input placeholder="String needs to verify"
                        onChange={e => setComparePlain(e.target.value)}/>
                    </div>
                    <div>
                        <input placeholder="String after encrypt"
                               onChange={e => setCompareHash(e.target.value)}/>
                    </div>
                </div>
                <div className="decrypt-result-box">
                    <button onClick={handleOnDecrypt}>verify</button>
                    <span style={{color: match=='Matched'?'green':'red', marginLeft: 20}}>{match}</span>
                </div>
            </div>
        </div>
    )
}