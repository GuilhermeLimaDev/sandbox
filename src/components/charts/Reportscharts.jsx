import { Chart } from "react-google-charts";
const ReportsCharts = () => {
  const data = [
    ["mes", "total de reports feito"],
    ["Janeiro 2024", 103],
    ["Fevereiro 2024", 134],
    ["Março 2024", 73],
    ["Abril 2024", 33],
  ];
  const options = {
    title: "Total de reports por mês",
  };
  return (
    <>
      <Chart
        chartType="ColumnChart"
        data={data}
        width="100%"
        height="400px"
        options={options}
      />
    </>
  );
};

export default ReportsCharts;
