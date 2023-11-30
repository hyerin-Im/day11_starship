import { Friend, Todos } from "./components";
import GlobalStyle from "./components/styled/GlobalStyle";

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Todos />
            <hr />
            <Friend />
        </div>
    );
};

export default App;
