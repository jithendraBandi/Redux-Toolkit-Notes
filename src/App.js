import './App.css';
import { Provider } from 'react-redux';
import store from './ReduxToolkit/store.js';
import ReduxToolkitClass from './components/ReduxToolkitClass';
// import ReduxToolkitFunc from './components/ReduxToolkitFunc';


const App = () => (
    <Provider store={store}>
        <ReduxToolkitClass />
    </Provider>
)

export default App;
