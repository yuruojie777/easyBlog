import React, {useEffect, useState} from "react";
import MDEditor from '@uiw/react-md-editor';
import "../css/myEditor.css";
import {Button, Input, message, Row} from "antd";
export const MyEditor = () => {
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(true);

    useEffect(() => {
        const handleUnload = event => {
            if (hasUnsavedChanges) {
                event.returnValue = "You have unsaved changes. Are you sure you want to leave?";
            }
        };

        window.addEventListener('beforeunload', handleUnload);

        return () => {
            window.removeEventListener('beforeunload', handleUnload);
        };
    }, [hasUnsavedChanges]);

    const handleContentChange = () => {
        setHasUnsavedChanges(true);
    };
    const [value, setValue] = React.useState(`# Linux command
You must know something easy 

![image](https://d1vk3m4dx2p0us.cloudfront.net/wp-content/uploads/sites/2/2023/06/ai-linux-tux.jpg)`);
    const handleOnSave = () => {
        message.success("Success");
        setHasUnsavedChanges(false);
    }
    return (
        <div className="container">
            <div style={{display: "flex", flexDirection: "row", gap: "10px", marginBottom: "10px"}}>
                <Input placeholder="Input title" maxLength={100} showCount={true} size="large"/>
                <Button type="primary" ghost shape="round" size="large" onClick={() => handleOnSave()}>Save</Button>
            </div>
            <MDEditor
                value={value}
                onChange={setValue}
                height="90vh"
            />
        </div>
    );
}