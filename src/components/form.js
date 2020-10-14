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
    for (var i = 0; i <= formArray.length; i++) {
      returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    let data = this.objectifyForm(form);
    if (window.confirm("Ready to save?" + JSON.stringify(data))) {
      fetch('./.netlify/functions/projects', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      event.target.reset();
      console.log('created' + JSON.stringify(data));
    };    
  }

  render() {
    return (
      <div className="main-form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="po_number">PO Number:</label>
          <input id="po_number" name="po_number" type="text" />

          <label htmlFor="representative">Representative:</label>
          <input id="representative" name="representative" type="text" />

          <label htmlFor="customer_name">Customer Name:</label>
          <input id="customer_name" name="customer_name" type="text" />

          <label htmlFor="shipping_address">Shipping Address:</label>
          <input id="shipping_address" name="shipping_address" type="text" />

          <label htmlFor="email_address">Email Address:</label>
          <input id="email_address" name="email_address" type="email" />

          <label htmlFor="invoice_address">Paper Invoice Address:</label>
          <input id="invoice_address" name="invoice_address" type="text" />

          <label htmlFor="billing_percentage">Billing Percentage:</label>
          <input id="billing_percentage" name="billing_percentage" type="text" defaultValue="100"/>

          <button>Create Project</button>
        </form>
      </div>
    );
  }
}


export default Form