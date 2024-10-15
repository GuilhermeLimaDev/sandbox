import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import "./App.css";
import InfoReport from "./InfoReport/InfoReport";
import EditUser from "./EditUser/EditUser";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/inforeport/:id" element={<InfoReport />} />
        <Route path="/edituser/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
};

export default App;
