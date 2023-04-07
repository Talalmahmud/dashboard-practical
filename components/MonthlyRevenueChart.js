import { Line } from "chart.js";

const MonthlyRevenueChart = ({ data }) => {
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <Line
      data={{
        labels: data.labels,
        datasets: [
          {
            label: "Monthly Revenue",
            data: data.revenue,
            fill: false,
            borderColor: "#4F46E5",
          },
        ],
      }}
      options={options}
    />
  );
};

export default MonthlyRevenueChart;
