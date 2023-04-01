import {Divider, Modal, Form, Input, DatePicker, Space} from 'antd';
import React, {useRef, useState} from "react";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);


export const UserDetailModal = ({open}) => {
    const dateFormat = 'YYYY/MM/DD';
    const [isModalOpen, setIsModalOpen] = useState(false);
    const userDetail = useRef(
        {
            name: "Roger",
            gender: "",
            birthday: "1997/10/11",
            address: {
                detail: "78Stanley St.",
                suburb: "Burwood",
                city: "Sydney",
                state: "NSW",
                country: "Australia"
            },
            intro: "Hello everyone, my name is Roger! Nice to meet you"
        }
    );

    const handleOk = () => {
        setIsModalOpen(false);
        
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinish = (values) => {
        console.log(values);
    };
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
    const layout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 16,
        },
    };
    return (
        <div>
            <Modal title="Edit profile"
                   open={open}
                   onOk={handleOk}
                   okText="Save"
                   okButtonProps={{size:'middle', shape:'round'}}
                   cancelButtonProps={{size:'middle', shape:'round'}}
                   onCancel={handleCancel}>
                <Divider/>
                <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    style={{
                        maxWidth: 600,
                    }}
                    validateMessages={validateMessages}
                >
                    <Form.Item
                        name={['user', 'name']}
                        label="Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        initialValue={userDetail.current.name}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'birthday']}
                        label="Birthday"
                        initialValue={dayjs(userDetail.current.birthday, dateFormat)} format={dateFormat}
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item name={['user', 'website']} label="Website">
                        <Input addonBefore="https://" allowClear />
                    </Form.Item>
                    <Form.Item name={['user', 'address']} label="Address">
                        <Space direction="vertical" size="small">
                            <Space.Compact>
                                <Input
                                    style={{
                                        width: '40%',
                                    }}
                                    defaultValue={userDetail.current.address.detail}
                                />
                                <Input
                                    style={{
                                        width: '20%',
                                    }}
                                    defaultValue={userDetail.current.address.suburb}
                                />
                                <Input
                                    style={{
                                        width: '20%',
                                    }}
                                    defaultValue={userDetail.current.address.city}
                                />
                                <Input
                                    style={{
                                        width: '20%',
                                    }}
                                    defaultValue={userDetail.current.address.state}
                                />
                                <Input
                                    style={{
                                        width: '20%',
                                    }}
                                    defaultValue={userDetail.current.address.country}
                                />
                            </Space.Compact>
                        </Space>
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="Introduction"
                    initialValue={userDetail.current.intro}>
                        <Input.TextArea />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}