import Router from "./router/Router";
import GlobalStyle from "./GlobalStyle";
import GlobalState from "./global/GlobalState";

const App = () => {
  return (
    <>
      <GlobalState>
        <GlobalStyle/>
        <Router/>
      </GlobalState>
    </>
  );
}

export default App;
