import React, {useEffect, useRef, useState} from "react";
import MDEditor from '@uiw/react-md-editor';
import "../css/myEditor.css";
import {Button, Input, message, Row} from "antd";
import axios from "axios";
import {post} from "../service/ApiService";
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

    const titleRef = useRef("");
    const contentRef = useRef("");
    const [value, setValue] = useState("");
    const handleOnSave = () => {
        const data = {
            title: titleRef.current.input.value,
            content: contentRef.current.markdown
        }
        console.log(data);
        post(`/endpoint/ezblog/post`, data).then(() => {
            message.success("Success");
            setHasUnsavedChanges(false);
            window.location.assign("/blog");
        }).catch((e) => {
            console.error(e);
            message.error("Error");
        })
    }
    return (
        <div className="container">
            <div style={{display: "flex", flexDirection: "row", gap: "10px", marginBottom: "10px"}}>
                <Input ref={titleRef} placeholder="Input title" maxLength={100} showCount={true} size="large" />
                <Button type="primary" size="large" onClick={() => handleOnSave()}>Save</Button>
            </div>
            <MDEditor
                value={value}
                ref={contentRef}
                onChange={setValue}
                height="90vh"
            />
        </div>
    );
}