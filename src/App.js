import React from 'react';
import Items from './components/Items';
import FormAddItem from './components/FormAddItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3> Add new item</h3>
      <FormAddItem />
      <Items />
    </div>
  );
}

export default App;
