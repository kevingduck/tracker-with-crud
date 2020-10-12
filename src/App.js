import React from 'react';
import './App.css';
import Form from './components/form.js';
import Header from './components/header.js';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Form></Form>
      </div>
    );
  }
}

export default App;
