import { Chart } from "react-google-charts";
const UserCharts = () => {
  const data = [
    ["Tipo", "Total Usuários"],
    ["Representante", 201],
    ["Funcionários", 54],
  ];
  return (
    <>
      <Chart
        chartType="ColumnChart"
        data={data}
        width="100%"
        height="400px"
        options={{ title: "Quantidade de Usuários Ativos" }}
      />
    </>
  );
};

export default UserCharts;
