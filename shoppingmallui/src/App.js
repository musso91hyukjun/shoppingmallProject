import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'


import Header from './component/Header'
import Footer from './component/Footer';
import './css/Footer.css'
import Item from './component/Item';

function App() {
  return (
    <div className="App">
      <Header />
        <Item />
      <Footer />
    </div>
  );
}

export default App;
