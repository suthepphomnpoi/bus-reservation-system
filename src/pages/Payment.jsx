import Navbar from "../components/Navbar";


export default function Payment() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <strong>6:00 PM</strong>
                    <span className="mx-2">—</span>
                    <span>3:00 AM</span>
                  </div>
                  <div className="text-end">
                    <span className="text-warning fw-bold" style={{fontSize: '1.2rem'}}>₹ 600</span>
                    <div>9 Hours</div>
                  </div>
                </div>
                <div>Sangitam Travels</div>
                <div className="text-muted">A/C Sleeper (2+2)</div>
              </div>
            </div>
            <div className="row mb-4">
              {/* Paypal */}
              <div className="col-md-4 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span>Paypal</span>
                      <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" alt="PayPal" style={{height: '24px'}} />
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="radio" name="paymentMethod" id="paypal1" />
                    </div>
                    <div style={{fontSize: '0.95rem'}}>
                      PayPal is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically.
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile Banking */}
              <div className="col-md-4 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span>Mobile Banking</span>
                      <img src="https://cdn-icons-png.flaticon.com/512/69/69524.png" alt="Bank" style={{height: '24px'}} />
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="radio" name="paymentMethod" id="mobilebanking" />
                    </div>
                    <div style={{fontSize: '0.95rem'}}>
                      Mobile Banking is a convenient way to transfer money and pay bills directly from your bank account using your mobile device.
                    </div>
                  </div>
                </div>
              </div>
              {/* Mastercard */}
              <div className="col-md-4 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span>Mastercard</span>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" style={{height: '24px'}} />
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="radio" name="paymentMethod" id="mastercard" />
                    </div>
                    <div style={{fontSize: '0.95rem'}}>
                      Mastercard enables secure payments worldwide, allowing you to shop and pay easily with your credit or debit card.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="col-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5>Order Summary</h5>
                <div className="d-flex justify-content-between">
                  <span>Price</span>
                  <span>$348</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Shipping</span>
                  <span>$0</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Tax</span>
                  <span>$0</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Discount Price</span>
                  <span>$48</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold">
                  <span>Total Price</span>
                  <span>$300</span>
                </div>
                <button className="btn btn-dark w-100 mt-3">CHECKOUT</button>
              </div>
            </div>
            <div className="input-group mb-4">
              <input type="text" className="form-control" placeholder="Enter coupon code" />
              <button className="btn btn-dark" type="button">Apply code</button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
