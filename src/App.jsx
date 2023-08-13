import { Provider } from 'react-redux';
import store from './store';
import Routes from "./components/Route.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes/>
      </div>
    </Provider>
  );
};

export default App;