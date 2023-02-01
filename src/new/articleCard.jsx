import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const ArticleCard = (props) => (
  <Card
    style={{
      height: 300
    }}
    cover={
      <img
        alt={props.coverImageDescription}
        src={props.coverImageURL}
      />
    }
    // actions={[
    //   <SettingOutlined key="setting" />,
    //   <EditOutlined key="edit" />,
    //   <EllipsisOutlined key="ellipsis" />,
    // ]}
  >
    <Meta
      avatar={<Avatar src={props.avatarURL} />}
      title={props.title}
      description={props.description}
    />
  </Card>
);
export default ArticleCard;