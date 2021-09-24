import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Products from './components/Products'
import About from './components/About'
import Error from './components/Error'

import './App.css';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch> {/*chạy lần lượt các router nếu chung thì dừng lại */}
      <Route exact path="/" component={Home}/> {/* exact: trỏ đến đường path chính xác */} 
      <Route path="/products" component={Products} />
      <Route path="/about" component={About} />
      <Route  path="/:somestring" component={Error} /> {/* : là dạng kí tự bất kỳ */}
      </Switch>  
    </Router>
  )
}

export default App;