import {
  DollarCircleOutlined,
  ExclamationCircleOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  NumberOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Col,
  Divider,
  List,
  Radio,
  Row,
  Segmented,
  Typography,
} from "antd";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LineChart, { CoinHistory } from "../../components/crypto/LineChart";
import {
  fetchCoinDataDetail,
  fetchCoinHistory,
} from "../../services/coinService";
const { Title, Text } = Typography;
const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

const CryptoDetail = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState<string | number>("7d");
  const [coinDetail, setCoinDetail] = useState<any>();
  const [coinHistory, setCoinHistory] = useState<CoinHistory>({
    change: "",
    history: [],
  });

  useEffect(() => {
    (async () => {
      const coinDetail = await fetchCoinDataDetail(coinId);
      const coinHis = await fetchCoinHistory(coinId, timePeriod);
      setCoinDetail(coinDetail);
      setCoinHistory(coinHis);
    })();
  }, [coinId, timePeriod]);

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${coinDetail?.price && Number(coinDetail?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: coinDetail?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ 39.8B `,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${coinDetail?.marketCap && Number(coinDetail.marketCap)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${coinDetail?.allTimeHigh?.price}`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: coinDetail?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: coinDetail?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Change",
      value: coinDetail?.change,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${Number(coinDetail?.supply?.total)}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${Number(coinDetail?.supply?.circulating)}`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  const handleChangeTimePeriod = async (
    value: string | number
  ): Promise<void> => {
    const coinHis = await fetchCoinHistory(coinId, value);
    setCoinHistory(coinHis);
    setTimePeriod(value);
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Title level={2} className="coin-name">
          Bitcoin (BTC) Price
        </Title>
        <p>
          Bitcoin (BTC) live price in USD. View Value statistics,market cap and
          supply.
        </p>
      </div>
      <Divider />

      <LineChart
        coinHistory={coinHistory}
        currentPrice={coinDetail?.price}
        coinName={coinDetail?.name}
      />
      <Row justify="center" style={{ margin: 24 }}>
        <Col>
          <Radio.Group>
            <Radio.Button value="default" type="text">
              Time Period
            </Radio.Button>
            <Segmented
              options={time}
              value={timePeriod}
              onChange={handleChangeTimePeriod}
            />
          </Radio.Group>
        </Col>
      </Row>
      <Divider />

      <Row justify="space-between" gutter={[24, 24]}>
        <Col span={12}>
          <Title level={3} className="coin-details-heading">
            {coinDetail?.name} Value Statistics
          </Title>
          <p>An overview showing the stats of {coinDetail?.name}</p>

          <List
            itemLayout="horizontal"
            dataSource={stats}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={item.icon}
                      style={{ color: coinDetail?.color }}
                    />
                  }
                  title={item.title}
                />
                <Text>{item.value}</Text>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Title level={3} className="coin-details-heading">
            Other Statistics
          </Title>
          <p>An overview showing the stats of all cryptocurrencies</p>

          <List
            itemLayout="horizontal"
            dataSource={genericStats}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={item.icon}
                      style={{ color: coinDetail?.color }}
                    />
                  }
                  title={item.title}
                />
                <Text>{item.value}</Text>
              </List.Item>
            )}
          />
        </Col>
      </Row>

      <Row justify="space-between" gutter={[24, 24]}>
        <Col span={12}>
          <Title level={3}>What is {coinDetail?.name}?</Title>

          {parse(`${coinDetail?.description}`)}
        </Col>

        <Col span={12}>
          <Title level={3} className="coin-details-heading">
            {coinDetail?.name} Links
          </Title>

          <List
            itemLayout="horizontal"
            dataSource={coinDetail?.links}
            renderItem={(item: { name: string; type: string; url: string }) => (
              <List.Item>
                <List.Item.Meta title={item.type} />
                <Text>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.name}
                  </a>
                </Text>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default CryptoDetail;
