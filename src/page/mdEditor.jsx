import React, {useEffect} from "react";
import MDEditor from '@uiw/react-md-editor';
import "../css/myEditor.css";
export const MyEditor = () => {
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            console.log("going to unload");
            event.preventDefault();
            event.returnValue = 'Are you sure you want to leave? Your changes may not be saved.';
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);
    const [value, setValue] = React.useState("");
    return (
        <div className="container">
            <MDEditor
                value={value}
                onChange={setValue}
                height="90vh"
            />
            {/*<MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />*/}
        </div>
    );
}