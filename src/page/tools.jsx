import '../css/tools.css';
import {Tabs} from "antd";
import {useState} from "react";
import {Base64Decode} from "./base64Decode";
import {JsonPrettify} from "./jsonPrettify";
import {RandomGenerator} from "./randomGenerator";
import {BcryptGenerator} from "./bcryptGenerator";
import {WordSearch} from "./wordSearch";
export const Tools = () => {
    const [mode, setMode] = useState('top');
    const handleModeChange = (e) => {
        setMode(e.target.value);
    };
    const items = [
        {
            label: `Word`,
            key: 1,
            children: <WordSearch/>,
        },
        {
            label: `JsonPrettify`,
            key: 2,
            children: <JsonPrettify/>,
        },
        {
            label: `RandomGenerator`,
            key: 3,
            children: <RandomGenerator/>,
        },
        {
            label: `Bcrypt`,
            key: 4,
            children: <BcryptGenerator/>,
        },
        {
            label: `Base64Decode`,
            key: 5,
            children: <Base64Decode/>,
        },
    ];
    return (
        <div className="tools-container">
            <Tabs
                defaultActiveKey="1"
                tabPosition={mode}
                style={{
                    height: 220,
                }}
                items={items}
            />
        </div>
    )
}