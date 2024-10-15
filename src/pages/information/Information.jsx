import LabelsInfo from "../../components/charts/LabelsInfo";
import ReportsCharts from "../../components/charts/Reportscharts";
import UserCharts from "../../components/charts/Userscharts";
import "./Information.css";

const Information = () => {
  return (
    <>
      <div className="informacoes">
        <h1 style={{ color: "#fff", fontSize: "2em" }}>Informações</h1>
        <p style={{ color: "#f5f5f5" }}>
          Principais dados do sistema de reports
        </p>
        <div className="section1">
          <LabelsInfo />
          <div className="ContainerCharts">
            <div className="labels">
              <UserCharts />
            </div>
            <div className="chartsreport">
              <ReportsCharts />
            </div>
          </div>
        </div>
        <div className="section2">
          <h1 style={{ color: "#fff", fontSize: "2em" }}>Reports</h1>
          <p style={{ color: "#f5f5f5" }}>Principais dados dos reports</p>
          <div className="article"></div>
          <div className="article"></div>
        </div>
      </div>
    </>
  );
};

export default Information;
