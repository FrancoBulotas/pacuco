
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowUpIcon, ArrowDownIcon, Package2Icon, TrendingUpIcon } from "lucide-react";


const Stats = ({ totalSales, topProducts }) => {
  const [hoveredBar, setHoveredBar] = useState(null);

  const statsCards = [
    {
      title: "Total vendidos",
      value: `${totalSales}`,
      icon: <TrendingUpIcon size={16} />,
    },
  ];

  return (
    <div className="stats-container animate-fade-in">
      <div className="stats-content">
        <div className="stats-header">
          <h1 className="stats-title">Historico</h1>
        </div>

        <div className="stats-cards">
          {statsCards.map((stat, index) => (
            <div key={index} className="stats-card">
              <div className="stats-card-header">
                <div className="stats-card-info">
                  <p className="stats-card-label">{stat.title}</p>
                  <p className="stats-card-value">{stat.value}</p>
                </div>
                <div className="stats-card-icon">
                  {stat.icon}
                </div>
              </div>
              {stat.trend && (
                <div className="stats-trend">
                  {stat.trend === "up" ? (
                    <ArrowUpIcon className="trend-up" size={16} />
                  ) : stat.trend === "down" ? (
                    <ArrowDownIcon className="trend-down" size={16} />
                  ) : null}
                  {stat.percentage && (
                    <span className={stat.trend === "up" ? "trend-up" : "trend-down"}>
                      {stat.percentage} from last month
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="chart-container-sales">
          <h2 className="chart-title">Guardapolvos mas vendidos</h2>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topProducts}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e9ecef" />
                <XAxis dataKey="name" stroke="#6c757d" />
                <YAxis stroke="#6c757d" />
                <Tooltip
                  cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
                  contentStyle={{
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Bar
                  dataKey="ventas"
                  fill="rgba(250, 191, 222, 0.8)"
                  radius={[4, 4, 0, 0]}
                  onMouseEnter={(topProducts) => setHoveredBar(topProducts.category)}
                  onMouseLeave={() => setHoveredBar(null)}
                  opacity={0.9}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

