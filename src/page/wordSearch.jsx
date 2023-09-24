import Search from "antd/es/input/Search";
import {useEffect, useRef, useState} from "react";
import {get} from "../service/ApiService";
import "../css/wordSearch.css";
import {Button, Card, List, Modal, Result, Space, Spin, Typography} from "antd";
import Meta from "antd/es/card/Meta";
import {WordCardModal} from "../component/modal/wordCardModal";
import {SoundFilled, StarFilled, StarOutlined} from "@ant-design/icons";
const { Text, Link } = Typography;
export const WordSearch = () => {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState('');
    const [showGptBtn, setShowGptBtn] = useState(false);

    const [showDetail, setShowDetail] = useState(false);
    const [wordDetail, setWordDetail] = useState(null);
    const [star, setStar] = useState(false);
    const modalRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowDetail(false);
                setStar(false);
                console.log("close");
            }
        }

        if (setShowDetail) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setShowDetail]);
    const onInput = (word) => {
        if(word.length > 0) {
            get(`/api/word/lookup?text=${word}`).then(
                (res) => {
                    if(res.data.length !== 0) {
                        setResult(res.data);
                        setShowGptBtn(false)
                    } else {
                        setResult([]);
                        setNotFound(word);
                        setShowGptBtn(true);
                    }
                }
            )
        } else {
            setResult([]);
            setShowGptBtn(false);
        }
    }
    const onSearch = (word) => {
        if(word.length > 0) {
            get(`/api/word/exact-lookup?text=${word}`).then(
                (res) => {
                    if(res.data !== "") {
                        setResult([res.data]);
                        setShowGptBtn(false)
                    } else {
                        setResult([]);
                        setNotFound(word);
                        setShowGptBtn(true);
                    }
                }
            )
        } else {
            setResult([]);
        }
    }

    const onGPTSearch = () => {
        setLoading(true);
        if(notFound.length !== 0) {
            get(`/api/word/ai-lookup?text=${notFound}`).then(
                (res) => {
                    if(res.data !== false) {
                        setResult([res.data]);
                    } else {
                        setResult([]);
                    }
                }
            ).finally(() => {setShowGptBtn(false); setLoading(false)})
        }
    }

    const handleShowDetail = (word) => {
        setWordDetail(word);
        setShowDetail(true);
        console.log(word);
    }
    const handleOnPlayAudio = () => {
        if(wordDetail.audio !== null)
        new Audio(wordDetail.audio).play();
    }
    return (
        <div>
            <div className="word-search-container">
                <Search
                    placeholder="Search here..."
                    allowClear
                    onSearch={(word) => onSearch(word)}
                    style={{ width: '100%' }}
                    onChange={(event) => {onInput(event.target.value)}}
                >

                </Search>
                {
                    showGptBtn && !loading?
                        (
                            <Result
                                status="404"
                                subTitle="Sorry, we cannot find the word you search. Try GPT generate?"
                                extra={<Button type="primary" onClick={onGPTSearch}>GPT Generate</Button>}
                            />
                        ):''
                }
                {
                    loading?
                        (
                            <div className="word-result-area">
                                <Spin tip="Searching..." size="large">
                                </Spin>
                            </div>
                        ):''
                }
                {
                    !showGptBtn?(
                        <List
                            itemLayout="horizontal"
                            dataSource={result}
                            size='small'
                            style={{textAlign: 'left'}}
                            locale={{emptyText: 'No result'}}
                            renderItem={(def, index) => (
                                <List.Item key={index} onClick={() => handleShowDetail(def)}>
                                    <List.Item.Meta
                                        description={<><Text strong>{def.value}</Text> {def.definitions[0]!==undefined?(def.definitions[0].localized):''}</>}
                                    />
                                </List.Item>
                            )}
                        />
                    ):''
                }
            </div>
            <div className="word-detail-modal" ref={modalRef} style={{display: showDetail?'flex':'none'}}>
                <Card
                    style={{width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.75)', color:'white'}}
                >
                    <Meta title={
                        <span>
                            {wordDetail?.value}
                            {star? (<StarFilled style={{float: "right", color: "yellow"}} onClick={() => {setStar(!star)}}/>)
                            :<StarOutlined style={{float: "right"}} onClick={() => {setStar(!star)}}/>}
                        </span>
                    } />
                    {(wordDetail?.phoneticSymbol === null || wordDetail?.phoneticSymbol === '')?''
                        :(<p>/&nbsp;{wordDetail?.phoneticSymbol}&nbsp;/&nbsp;&nbsp;<SoundFilled onClick={handleOnPlayAudio}/></p>)}
                    {
                        wordDetail?.definitions.map((def, index) => {
                            return (
                                <li key={index} style={{marginBottom: '30px'}}>
                                    <p style={{textAlign: "left"}}>{index + 1}.&nbsp;{def.partOfSpeech}&nbsp;&nbsp;{def.localized}</p>
                                    <p style={{textAlign: "left"}}>{def.english}</p>
                                </li>
                            )
                        })
                    }
                </Card>
            </div>
        </div>
    )
}