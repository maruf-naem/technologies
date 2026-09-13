
import "./App.css";
import type { DataType } from "./DataType";
import Home from "./Hero Component/Home";
import Nav from "./Nav Component/Nav";
import Technologies from "./Technologies Components/Technologies/Technologies";
import TitleSection from "./Technologies Components/TitleSection";

const data = async (): Promise<DataType[]> => {
  const res = await fetch("/Data.json");
  const data = await res.json();
  return data;
};

const dataPromise = data();

function App() {
  return (
    <>
      <Nav />
      <Home />
      <TitleSection />
      <Technologies datas={dataPromise} />
      
    </>
  );
}

export default App;
