
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { DateTime } from 'luxon';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SoldProductsBarChart = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [totalProductsSold, setTotalProductsSold] = useState(0);
  const [chartData, setChartData] = useState({
    labels: [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
    ],
    datasets: [
      {
        label: `Productos vendidos por mes en ${selectedYear}`,
        data: Array(12).fill(0),
        backgroundColor: 'rgba(252, 157, 208, 0.8)',
        borderColor: 'rgba(252, 157, 208, 1)',
        borderWidth: 1,
      },
    ],
  });
  
  useEffect(() => {
    // Function to calculate the number of products sold per month
    const calculateProductsSold = (year) => {
      const productsSoldPerMonth = Array(12).fill(0);
      let annualProductsSold = 0;

      data.forEach((sale) => {
        const time = DateTime.fromJSDate(new Date(sale.time)).setZone('America/Argentina/Buenos_Aires').toFormat('dd/MM/yyyy HH:mm')
        const saleMonth = time.split('/')[1];
        const saleYear = time.split('/')[2].split(' ')[0];
        
        if (saleYear.toString() === year.toString()) {
          // Sum up the total products sold (`amountToBuy`) for each product in the cart
          sale.cartPurchased.forEach((product) => {
            const amountSold = Number(product.amountToBuy || 0); // Ensure it's a number
            productsSoldPerMonth[saleMonth - 1] += amountSold;
            annualProductsSold += amountSold;
          });
        }
      });

      return { productsSoldPerMonth, annualProductsSold };
    };

    // Calculate products sold for the selected year
    const { productsSoldPerMonth, annualProductsSold } = calculateProductsSold(selectedYear);

    // Update state with the calculated data
    setTotalProductsSold(annualProductsSold);
    setChartData((prevData) => ({
      ...prevData,
      datasets: [
        {
          ...prevData.datasets[0],
          label: `Productos vendidos por mes en ${selectedYear}`,
          data: productsSoldPerMonth,
        },
      ],
    }));
  }, [selectedYear, data]);

  const handleYearChange = (event) => {
    setSelectedYear(Number(event.target.value));
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Productos Vendidos en ${selectedYear}: ${totalProductsSold.toLocaleString()} unidades`,
      },
    },
  };

  return (
    <>
      <div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="year-select" style={{ fontSize: '14px', padding: '3px' }}>
            Selecciona el año:
          </label>
          <select
            id="year-select"
            value={selectedYear}
            onChange={handleYearChange}
            style={{
              fontSize: '14px',
              boxShadow: 'none',
              border: 'none',
              outline: 'none',
              marginLeft: '10px',
            }}
          >
            {/* Generate year options dynamically */}
            {Array.from({ length: 2 }, (_, i) => {
              const year = new Date().getFullYear() - i; // Current year and previous 4 years
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
        <Bar data={chartData} options={options} />
      </div>
    </>
  );
};

export default SoldProductsBarChart;