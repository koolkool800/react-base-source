import { Avatar, Space, Table, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import { Coins } from "../../store/reducer";

const { Title } = Typography;

type Props = {
  data: Coins[] | [];
  loading: boolean;
};

const columns: ColumnsType<Coins> = [
  {
    title: "#",
    width: 50,
    render: (value, record, index) => {
      return (
        <Title
          level={5}
          className="heading"
          style={{ color: `${record.color}` }}
        >
          {++index}
        </Title>
      );
    },
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, record, index) => {
      return (
        <Space size={16} align="center">
          <Avatar src={record.iconUrl} />
          <Title level={5} className="heading">
            {text}
          </Title>
          <Title
            level={5}
            className="heading"
            style={{ color: `${record.color}` }}
          >
            {record.symbol}
          </Title>
        </Space>
      );
    },
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    sorter: (a, b) => Number(a.price) - Number(b.price),
    render: (value, record, index) => {
      return (
        <Title
          level={5}
          className="heading"
          style={{ color: `${record.color}` }}
        >
          &#8363;{value}
        </Title>
      );
    },
  },
  {
    title: "Market Cap",
    dataIndex: "marketCap",
    key: "marketCap",
    defaultSortOrder: "descend",
    sorter: (a, b) => Number(a.marketCap) - Number(b.marketCap),
    render: (value, record, index) => {
      return (
        <Title
          level={5}
          className="heading"
          style={{ color: `${record.color}` }}
        >
          &#8363;{value}
        </Title>
      );
    },
  },
  {
    title: "Price Change",
    dataIndex: "change",
    key: "change",
    render: (value, record, index) => {
      return (
        <Title
          level={5}
          className="heading"
          style={{ color: `${record.color}` }}
        >
          &#8363;{value}
        </Title>
      );
    },
  },
];

const DataTable = ({ data = [], loading = false }: Props) => {
  let navigate = useNavigate();

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey={(record) => record.uuid}
      loading={loading}
      pagination={{ pageSize: 25 }}
      // sticky
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => navigate(`/crypto/${record.uuid}`),
        };
      }}
    />
  );
};

export default DataTable;
