import './App.css';
import Routing from './routes/Routing';
import { HelmetProvider } from 'react-helmet-async';
function App() {
  return (
    <>
      <HelmetProvider>
        <Routing />
      </HelmetProvider>
    </>
  );
}

export default App;
