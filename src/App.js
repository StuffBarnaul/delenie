import React from 'react';
import './App.css';
import {Card, Typography} from "antd";

const { Title } = Typography;

const x1 = 2;
const x2 = 2;

if (x2==0) throw new Error("Ошибка деления на 0");

function App() {
  return (
    <div className="App">
        <Title level={2}>Программа деления</Title>
      <Card title="Деление" bordered={false} style={{ width: 300 }}>
        <p>{x1} / {x2} = {x1/x2}</p>
      </Card>

    </div>
  );
}

export default App;
