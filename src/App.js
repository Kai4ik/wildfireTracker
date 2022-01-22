import Map from "./components/Map";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow: hidden;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyles />
      <Map />
    </div>
  );
}

export default App;
