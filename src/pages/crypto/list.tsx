import { blue } from "@ant-design/colors";
import { Col, Input, Row, Statistic, Typography } from "antd";
import { useEffect, useState } from "react";
import DataTable from "../../components/crypto/DataTable";
import { fetchCoinData } from "../../services/coinService";
import { useStore } from "../../store";
import { State } from "../../store/reducer";
import { getCoins } from "../../util/actions";

const { Title } = Typography;

const CryptoList = () => {
  const [state, dispatch] = useStore();
  const { stats, coins }: State = state;

  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    const delayDebounceFn = setTimeout(async () => {
      const coins = await fetchCoinData(searchTerm);
      if (coins !== undefined) {
        dispatch(getCoins(coins));
        setLoading(false);
      }
    }, 800);

    return () => clearTimeout(delayDebounceFn);
  }, [dispatch, searchTerm]);

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>

      <Row>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Statistic
            title="Total Cryptocurrencies"
            value={stats?.total}
            valueStyle={{ color: blue.primary, fontSize: 16 }}
            prefix="&#8363;"
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Statistic
            title="Total Exchanges"
            value={stats?.totalExchanges}
            valueStyle={{ color: blue.primary, fontSize: 16 }}
            prefix="&#8363;"
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Statistic
            title="Total Market Cap"
            value={stats?.totalMarketCap}
            valueStyle={{ color: blue.primary, fontSize: 16 }}
            prefix="&#8363;"
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Statistic
            title="Total 24h Volume"
            value={stats?.total24hVolume}
            valueStyle={{ color: blue.primary, fontSize: 16 }}
            prefix="&#8363;"
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Statistic
            title="Total Markets"
            value={stats?.totalMarkets}
            valueStyle={{ color: blue.primary, fontSize: 16 }}
            prefix="&#8363;"
          />
        </Col>
      </Row>

      <Row style={{ marginTop: 16 }}>
        <Col span={12}>
          <Title level={2} className="heading">
            Top 50 Cryptocurrencies in the World
          </Title>
        </Col>
        <Col span={12}>
          <Input
            style={{ borderRadius: "8px" }}
            placeholder="search crypto by name "
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
      </Row>

      <div
        style={{
          overflow: "auto",
        }}
      >
        <DataTable data={coins} loading={loading} />
      </div>
    </>
  );
};

export default CryptoList;
