import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = '707c9da5';
  const APP_KEY = 'ed1e5ec58f72e45846092cf555723422';

  const expampleReq =
  "https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}"
  
  return(
    <div className = "App">
      <h1>Hello React</h1>
    </div>
  );
};

export default App;
