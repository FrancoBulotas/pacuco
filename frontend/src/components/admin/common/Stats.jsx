
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowUpIcon, ArrowDownIcon, Package2Icon, TrendingUpIcon } from "lucide-react";
import purchasedProductService from '../../../services/purchasedProduct';

const Stats = ({ purchasedProducts }) => {
  const [hoveredBar, setHoveredBar] = useState(null);
  const [topPaymentMethods, setTopPaymentMethods] = useState(null);

  useEffect(() => {
    // este es para agarrar los datos de los metodos de pago del back.
    const getTopPaymentMethods = async () => {
      const response = await purchasedProductService.getTopPaymentMethods();
      setTopPaymentMethods(response.topPaymentMethods.sort((a, b) => b.cantidad - a.cantidad));
    }
    getTopPaymentMethods();
  }, [])

  const totalSales = purchasedProducts.reduce((total, sale) => {
      return total + sale.cartPurchased.reduce((subTotal, item) => subTotal + (item.amountToBuy || 0), 0);
  }, 0);

  // Paso 1: Acumular ventas por producto
  const productSales = {};
  purchasedProducts.forEach(sale => {
      sale.cartPurchased.forEach(item => {
          if (!productSales[item.name]) {
          productSales[item.name] = 0;
          }
          productSales[item.name] += item.amountToBuy || 0;
      });
  });

  // Paso 2: Convertir a array y ordenar
  const topProducts = Object.entries(productSales)
  .map(([name, ventas]) => ({ name, ventas })) // Convertir a formato deseado
  .sort((a, b) => b.ventas - a.ventas) // Ordenar de mayor a menor
  .slice(0, 6); 

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
          <h2 className="chart-title">Metodos de pago mas usados</h2>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topPaymentMethods}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e9ecef" />
                <XAxis dataKey="_id" stroke="#6c757d" />
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
                  dataKey="cantidad"
                  fill="rgba(250, 191, 222, 0.8)"
                  radius={[4, 4, 0, 0]}
                  onMouseEnter={(topPaymentMethods) => setHoveredBar(topPaymentMethods._id)}
                  onMouseLeave={() => setHoveredBar(null)}
                  opacity={0.9}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
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

