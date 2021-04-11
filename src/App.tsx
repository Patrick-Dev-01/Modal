import './app.css';
import { ModalProvider } from './contexts/ModalContext';
import Home from './components/Home';

function App() {

  return (
      <div className="App">
        <ModalProvider>
          <Home />
        </ModalProvider>
      </div>   
  );
}

export default App;
