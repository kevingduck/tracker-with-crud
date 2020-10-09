import React from 'react';
import './App.css';
import Form from './components/form.js';
import Header from './components/header.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    fetch('http://localhost:8888/.netlify/functions/items')
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }

  handleClick(e) {
    e.preventDefault()
    console.log('clicked')
    const contents = this.state.data
    // const contents = this.state.data.forEach(item => {
    //   // change the title and location key based on your API
    //   return <p>{item}</p>
    // })
    for(let i=0;i<contents.length;i++){
      console.log(contents[i].data)
    }
  }


  render() {
    return (
      <div className="App">
        <Header></Header>
        <button onClick={e => this.handleClick(e)}>load items</button>
        {this.contents}
        <Form></Form>
      </div>
    );
  }
}

export default App;
