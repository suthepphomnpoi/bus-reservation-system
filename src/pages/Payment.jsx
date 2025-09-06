import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Payment() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row g-4 flex-column-reverse flex-lg-row">
          {/* ฝั่งซ้าย: รายละเอียดเที่ยวรถ + วิธีชำระเงิน */}
          <div className="col-12 col-lg-8">
            {/* รายละเอียดเที่ยวรถ */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <strong>18:00 น.</strong>
                    <span className="mx-2">—</span>
                    <span>03:00 น.</span>
                  </div>
                  <div className="text-end">
                    <span
                      className="text-warning fw-bold"
                      style={{ fontSize: "1.2rem" }}
                    >
                      ฿ 600
                    </span>
                    <div>9 ชั่วโมง</div>
                  </div>
                </div>
                <div>บริษัทรถเมย์ สมมติ</div>
                <div className="text-muted">รถปรับอากาศ (2+2)</div>
              </div>
            </div>

            {/* วิธีการชำระเงิน */}
            <div className="row mb-4">
              {/* Paypal */}
              <div className="col-12 col-md-4 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span>เพย์พาล (PayPal)</span>
                      <img
                        src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
                        alt="PayPal"
                        style={{ height: "24px" }}
                      />
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMethod"
                        id="paypal1"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Banking */}
              <div className="col-12 col-md-4 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span>โมบายแบงก์กิ้ง</span>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/69/69524.png"
                        alt="Bank"
                        style={{ height: "24px" }}
                      />
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMethod"
                        id="mobilebanking"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mastercard */}
              <div className="col-12 col-md-4 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span>มาสเตอร์การ์ด</span>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                        alt="Mastercard"
                        style={{ height: "24px" }}
                      />
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMethod"
                        id="mastercard"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ฝั่งขวา: สรุปการสั่งซื้อ */}
          <div className="col-12 col-lg-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5>สรุปการสั่งซื้อ</h5>
                <div className="d-flex justify-content-between">
                  <span>ราคา</span>
                  <span>฿600</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>ค่าธรรมเนียม</span>
                  <span>฿0</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>ภาษี</span>
                  <span>฿0</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>ส่วนลด</span>
                  <span>-฿50</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold">
                  <span>ราคารวม</span>
                  <span>฿550</span>
                </div>
                <button className="btn btn-primary btn-lg w-100 mt-3">
                  ชำระเงิน
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
