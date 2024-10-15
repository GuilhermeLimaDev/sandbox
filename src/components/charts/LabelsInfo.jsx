import "./Charts.css";
const LabelsInfo = () => {
  const dados = {
    qtr: 100,
    qcr: 86,
    qpr: 12,
    txr: "0,86",
  };

  return (
    <>
      <div className="ContainerLabel">
        <div className="labelinfo">
          <label>{dados.qtr}</label>
          <h1>Quantidade de Reports feito</h1>
        </div>
        <div className="labelinfo">
          <label>{dados.qcr}</label>
          <h1>Quantidade de Reports concluidos</h1>
        </div>
        <div className="labelinfo">
          <label>{dados.qpr}</label>
          <h1>Quantidade de Reports pendentes</h1>
        </div>
        <div className="labelinfo">
          <label>{dados.txr}</label>
          <div>
            <h1>Taxa de resolução dos reports no ultimo mês</h1>
            <p>número de reports resolvidos/número total de reports</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabelsInfo;
