import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { words } from './static-words';
function App() {
  return (
    <div className="layout">
     <Header />
      <main>
        { words.mainTitle }
      </main>
      <Footer/>
    </div>
  );
}

export default App;
