import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    // this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.objectifyForm = this.objectifyForm.bind(this);
  }

  objectifyForm(formArray) {
    //serialize data function
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++) {
      returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    let data = this.objectifyForm(form);

    console.log('state data: ' + JSON.stringify(data));
    fetch('./.netlify/functions/items', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="username">Username:</label>
          <input id="username" name="username" type="text" />

          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" />

          <button>Send data!</button>
        </form>

        <div className="res-block">
          <h3>Transformed data to be sent:</h3>
          <pre>FormData {this.data}</pre>
        </div>
      </div>
    );
  }
}


export default Form