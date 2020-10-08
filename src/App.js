import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tracker</h1>
      </header>
      <div class="container-fluid main-form">
        <h1>Converged Networks Tracker</h1>
        <div class="row">
          <div class="col-md-8 col-sm-8 col-xs-8">
            <form method="post" netlify>
              <div class="form-group ">
                <label class="control-label " for="po_number">
                  PO Number
                    </label>
                <input class="form-control" id="po_number" name="po_number" type="text" />
              </div>
              <div class="form-group ">
                <label class="control-label" for="name">
                  Customer Name
                        </label>
                <input class="form-control" id="name" name="name" type="text" />
              </div>
              <div class="form-group ">
                <label class="control-label " for="shipping_address">
                  Ship To
                        </label>
                <textarea class="form-control" cols="20" id="shipping_address" name="shipping_address" rows="3"></textarea>
              </div>
              <div class="form-group ">
                <label class="control-label" for="email">
                  Email
                        </label>
                <input class="form-control" id="email" name="email" type="text" />
              </div>
              <div class="form-group ">
                <label class="control-label " for="paper">
                  Paper invoice address
                        </label>
                <textarea class="form-control" cols="40" id="paper" name="paper" rows="3"></textarea>
              </div>
              <div class="form-group ">
                <label class="control-label " for="billing">
                  Billing %
                        </label>
                <input class="form-control" id="billing" name="billing" type="text" />
              </div>
              <div class="form-group ">
                <label class="control-label " for="representative">
                  Representative
                        </label>
                <input class="form-control" id="representative" name="representative" type="text" />
              </div>
              <div class="item-form"></div>
              <div class="item-form">
                <span>Item</span>
                <div class="form-group ">
                  <label class="control-label " for="vendor">
                    Vendor
                                </label>
                  <input class="form-control" id="vendor" name="vendor" type="text" />
                </div>
                <div class="form-group ">
                  <label class="control-label " for="quantity">
                    Quantity
                                </label>
                  <input class="form-control" id="quantity" name="quantity" type="text" />
                </div>
                <div class="form-group ">
                  <label class="control-label " for="item_number">
                    Item number
                                </label>
                  <input class="form-control" id="item_number" name="item_number" type="text" />
                </div>
                <div class="form-group ">
                  <label class="control-label " for="description">
                    Description
                                </label>
                  <input class="form-control" id="description" name="description" type="text" />
                </div>
                <div class="form-group ">
                  <label class="control-label " for="unit_cost">
                    Unit cost
                                </label>
                  <input class="form-control" id="unit_cost" name="unit_cost" type="text" />
                </div>
                <div class="form-group ">
                  <label class="control-label ">
                    Insurance?
                                </label>
                  <div class=" ">
                    <div class="checkbox">
                      <label class="checkbox">
                        <input name="insurance" type="checkbox" value="Yes" />
                                            Yes
                                        </label>
                    </div>
                  </div>
                </div>
                <div class="form-group ">
                  <label class="control-label " for="unit_sales_price">
                    Unit Sales Price
                                </label>
                  <input class="form-control" id="unit_sales_price" name="unit_sales_price" type="text" />
                </div>
                <div class="form-group ">
                  <label class="control-label ">
                    Sales tax?
                                </label>
                  <div class=" ">
                    <div class="checkbox">
                      <label class="checkbox">
                        <input name="checkbox1" type="checkbox" value="Yes" />
                                            Yes
                                        </label>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                </div>
              </div>
              <div class="form-group">
                <button class="btn btn-primary" onclick="myFunction()" name="submit" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
  );
}

export default App;
