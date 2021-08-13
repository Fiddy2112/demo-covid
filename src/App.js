import "antd/dist/antd.css";
import LayoutCorona from "./components/Layout";
import CoronaProvider from "./context/CoronaProvider";
import GlobalCorona from "./components/Global";
import CountriesCorona from "./components/Countries";
function App() {
  return (
    <CoronaProvider>
      <LayoutCorona>
        <h1 style={{ textAlign: "center" }}>Thong tin Covid</h1>
        <GlobalCorona />
        <br />
        <CountriesCorona />
      </LayoutCorona>
    </CoronaProvider>
  );
}

export default App;
