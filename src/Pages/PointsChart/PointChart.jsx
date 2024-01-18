"use client";
import { AreaChart, Card, Title } from "@tremor/react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./pointschart.css";

const chartdata4 = [
  {
    date: "Ocak 23",
    Soru: 167,
  },
  {
    date: "Şubat 23",
    Soru: 125,
  },
  {
    date: "Mart 23",
    Soru: 156,
  },
  {
    date: "Nisan 23",
    Soru: 165,
  },
  {
    date: "Mayıs 23",
    Soru: 153,
  },
  {
    date: "Haziran 23",
    Soru: 124,
  },
  {
    date: "Temmuz 23",
    Soru: 78,
  },
  {
    date: "Ağustos 23",
    Soru: 85,
  },
  {
    date: "Eylül 23",
    Soru: 140,
  },
  {
    date: "Ekim 23",
    Soru: 48,
  },
  {
    date: "Kasım 23",
    Soru: 50,
  },
  {
    date: "Aralık 23",
    Soru: 75,
  },
];

const customTooltip = (props) => {
  const { payload, active } = props;
  if (!active || !payload) return null;
  return (
    <div className="w-56 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-white">
      {payload.map((category, idx) => (
        <div key={idx} className="flex flex-1 space-x-2.5">
          <div
            className={`w-1 flex flex-col bg-${category.color}-500 rounded`}
          />
          <div className="space-y-1">
            <p className="text-tremor-content">{category.dataKey}</p>
            <p  className="font-medium text-white">
              {category.value} Soru
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function AreaChartUsageExampleWithCustomTooltip() {
  return (
    <>
      <div style={{ backgroundColor: "#131f24" }} className="flex h-screen">
        <Sidebar />

        <Card>
          <div>
            <div
              className=" border border-white w-max p-8 mb-6 rounded-lg"
              style={{ color: "#fff" }}
            >
              <span className="mr-5">Günde Çözülen Soru:</span>
              <input
                className="bg-transparent "
                style={{ color: "#fff" }}
                type="text"
                name=""
                id=""
                placeholder="20 Soru Çözüldü"
                disabled
              />
            </div>
          </div>
          <Title style={{ color: "#fff" }}>Ayda Çözülen Soru</Title>
          <AreaChart
            className="h-72 mt-4 "
            data={chartdata4}
            index="date"
            categories={["Soru"]}
            colors={["green"]}
            yAxisWidth={30}
            customTooltip={customTooltip}
          />
        </Card>
      </div>
    </>
  );
}
