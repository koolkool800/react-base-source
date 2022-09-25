import { Typography } from "antd";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

type History = {
  price: string;
  timestamp: number;
};

export type CoinHistory = {
  change: string;
  history: History[] | [];
};

type Props = {
  coinHistory: CoinHistory;
  currentPrice: string;
  coinName: string;
};

const LineChart = ({ coinHistory, currentPrice, coinName }: Props) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.history?.length; i += 1) {
    coinPrice.push(coinHistory.history[i]?.price);
  }

  for (let i = 0; i < coinHistory?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.history[i]?.timestamp * 1000).toLocaleDateString()
    );
  }

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const data = {
    labels: coinTimestamp.reverse(),
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice.reverse(),
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  return (
    <>
      <Typography.Title level={2} className="chart-title">
        {coinName} Price Chart{" "}
      </Typography.Title>

      <Typography.Title level={5} className="price-change">
        Change: {coinHistory?.change}%
      </Typography.Title>

      <Typography.Title level={5} className="current-price">
        Current {coinName} Price: $ {currentPrice}
      </Typography.Title>

      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
