import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import {useEffect, useRef, useState} from "react";

export const WordCardModal = ({isOpen, wordDetail}) => {
    const modalRef = useRef(null);
    const [modalOpen, setModalOpen] = useState(isOpen);

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModalOpen(false);
                console.log("close");
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);
    return (
        <div className="word-detail-modal" ref={modalRef} style={{display: modalOpen?'flex':'none'}}>
            <Card
                style={{width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.75)', color:'white'}}
            >
                <Meta title={wordDetail?.value} />
                {(wordDetail?.phoneticSymbol === null || wordDetail?.phoneticSymbol === '')?'':(<p>|{wordDetail?.phoneticSymbol}|</p>)}
                {
                    <li>
                        {
                            wordDetail?.definitions.map((def, index) => {
                                return (
                                    <p>{def.localized + ' ' + def.english}</p>
                                )
                            })
                        }
                    </li>
                }
            </Card>
        </div>
    )
}