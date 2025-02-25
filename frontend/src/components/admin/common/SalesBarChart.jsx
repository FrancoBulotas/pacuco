import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
    const [selectedYear, setSelectedYear] = useState(2025);
    const [totalSales, setTotalSales] = useState(0);

    const [chartData, setChartData] = useState({
        labels: [
          'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
          'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
        ],
        datasets: [
          {
            label: `Total de ventas por mes en ${selectedYear}`,
            data: Array(12).fill(0),
            backgroundColor: 'rgba(250, 191, 222, 0.8)',
            borderColor: 'rgba(250, 191, 222, 1)',
            borderWidth: 1,
          },
        ],
      });
    
      useEffect(() => {
        // Función para calcular las ventas por mes y las ventas totales anuales
        const calculateSales = (year) => {
          const salesPerMonth = Array(12).fill(0);
          let annualSales = 0;
    
          data.forEach((sale) => {
            const month = sale.time.split('/')[1];
            const saleYear = sale.time.split('/')[2].split(',')[0];

            if (saleYear.toString() === year.toString()) {
              const saleAmount = Number(sale.totalPricePurchased);
              salesPerMonth[month - 1] += saleAmount;
              annualSales += saleAmount;
            }
          });
    
          return { salesPerMonth, annualSales };
        };
    
        // Calcula las ventas para el año seleccionado
        const { salesPerMonth, annualSales } = calculateSales(selectedYear);
    
        // Actualiza el estado con los datos calculados
        setTotalSales(annualSales);
        setChartData((prevData) => ({
          ...prevData,
          datasets: [
            {
              ...prevData.datasets[0],
              label: `Total de ventas por mes en ${selectedYear}`,
              data: salesPerMonth,
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
            text: `Ventas Totales en ${selectedYear}: $ ${totalSales.toLocaleString()}`,
          },
        },
      };

  return (
    <div>
      <div>
        <label htmlFor="year-select" style={{fontSize: '14px', padding:'3px'}}>Selecciona el año: </label>
        <select id="year-select" value={selectedYear} onChange={handleYearChange} style={{fontSize: '14px',boxShadow:'none', border:'none', outline:'none'}}>
          {/* 
            Genera opciones de año dinámicamente 
            (Si quiero meter mas del año actual y el año anterior, cambiar el length)
          */}
          {Array.from({ length: 2 }, (_, i) => {
            const year = new Date().getFullYear() - i;
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
  );
};

export default BarChart;
