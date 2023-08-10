import '../css/tools.css';
import {Tabs} from "antd";
import {useState} from "react";
import {Base64Decode} from "./base64Decode";
import {JsonPrettify} from "./jsonPrettify";
import {RandomGenerator} from "./randomGenerator";
import {BcryptGenerator} from "./bcryptGenerator";
export const Tools = () => {
    const [mode, setMode] = useState('top');
    const handleModeChange = (e) => {
        setMode(e.target.value);
    };
    const items = [
        {
            label: `Base64Decode`,
            key: 1,
            children: <Base64Decode/>,
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
        }
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