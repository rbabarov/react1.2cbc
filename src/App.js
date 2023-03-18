import propTypes from 'prop-types';
import './App.css';
import ProductProfile from './components/ProductProfile';


function App() {
  const card = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: `Men\`s minimalistic overcoat in cotton-blend. Features a stand-up collar,
      concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.`,
    price: 399.00,
    currency: '£'
  }
  return (
    <div className="App">
      <div className="container">
        <div className="background-element"></div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ProductProfile card={card}/>
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  card: propTypes.object.isRequired,
}
export default App;
