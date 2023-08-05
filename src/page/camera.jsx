import {useCallback, useRef, useState} from "react";
import Webcam from "react-webcam";
import {CameraOutlined} from "@ant-design/icons";
export const Camera = () => {
    const videoConstraints = {
        width: 520,
        height: 520,
        facingMode: "user"
    };
    const [img, setImg] = useState(null);
    const [list, setList] = useState([]);
    const webcamRef = useRef(null);
    function base64ToFile(base64String, filename, mimeType) {
        const byteString = window.atob(base64String);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);

        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new File([ab], filename, { type: mimeType });
    }
    console.log(new Date().getTime());
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImg(imageSrc);
        setList(list => [...list, imageSrc]);
    }, [webcamRef]);


    return (
        <div>
            {img === null ? (
                <>
                    <Webcam
                        audio={false}
                        mirrored={true}
                        height={400}
                        width={400}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                    />
                    <div>
                        <CameraOutlined onClick={capture} style={{fontSize: "larger"}}/>
                        {/*<button onClick={capture}>Capture photo</button>*/}
                    </div>
                </>
            ) : (
                <>
                    <img src={img} alt="screenshot" />
                    <div><button onClick={() => setImg(null)}>Retake</button></div>
                </>
            )}
            <div>
                {list.map(img => <img src={img} style={{width: 200, height: 200}}/>)}
            </div>
        </div>
    )
}