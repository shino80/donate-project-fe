import { Space, Typography, Card, Table } from "antd";
import {
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import Statistic from "antd/es/statistic/Statistic";
import './dashboard.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
 const getOrders = () => {
  return fetch("https://dummyjson.com/carts/1")
    .then((res) => res.json())
};
 const getRevenue = ()=>{
return fetch('https://dummyjson.com/carts')
.then(res => res.json())
}


export const getInventory = ()=>{

}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const DashBoard = () => {
  return (
    <div className="dashboard">
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>DashBoard</Typography.Title>
        <Space size={30} direction="horizontal">
          <DashBoardCard
            icon={
              <HeartOutlined
                style={{
                  color: "red",
                  backgroundColor: "rgba(255,0,0,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title="Total Products"
            value={1000}
          />
          <DashBoardCard
            icon={
              <UserOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgba(0,0,255,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title="Donators "
            value={200}
          />
          <DashBoardCard
            icon={
              <ShoppingOutlined
                style={{
                  color: "purple",
                  backgroundColor: "rgba(0,255,255,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title="Total Receive Products"
            value={500}
          />

          <DashBoardCard
            icon={
              <UserOutlined
                style={{
                  color: "green",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title="Total Recipients"
            value={200}
          />
        </Space>
        <Space>
          <RecentOrders />
          <DashBoardChart />
        </Space>
      </Space>
    </div>
  );
};

const DashBoardCard = ({ title, value, icon }) => {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};

function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 5));
      setLoading(false);
    });
  }, []);

  return (
    <>
    
      <Table
        columns={[
          {
            title: "Product Name",
            dataIndex: "title",
          },
          {
            title: "Amount Given",
            dataIndex: "quantity",
          },
          {
            title: "Amount Donated",
            dataIndex: "quantity",
          },
          {
            title: "Amount of Recipients",
            dataIndex: "quantity",
          }
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      />
    </>
  );
}

function DashBoardChart() {
  const [revenueData, setRevenueData] = useState({
    labels: [],
    datasets: [],
  });
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  useEffect(() => {
    getRevenue().then((res) => {
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });
      const dataSource = {
        labels,
        datasets: [
          {
            label: "Number of donated products",
            data: data,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Number of products received ",
            data: data,
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      };
      setRevenueData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Compare the number of products received and given in each month",
      },
    },
  };

  return (
    <Card style={{ width: 800, height: 400 }}>
      <Bar options={options} data={revenueData} />
    </Card>
  );
}
export default DashBoard;