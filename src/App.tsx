import logo from "./logo.svg";
import "./App.css";
import TableOne from "./components/TableOne";
import TableTwo from "./components/TableTwo";
import TableThree from "./components/TableThree";
import { GlobalStyle } from "./GlobalStyle";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <TableOne />
            <TableTwo />
            <TableThree />

            <GlobalStyle />
        </div>
    );
}

export default App;
