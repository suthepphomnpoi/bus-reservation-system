import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import "./Payment.css";

import promptpayImage from '../assets/images/promptpay.png'

export default function Payment() {
  const [selectedMethod, setSelectedMethod] = useState("");

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row g-4 flex-column flex-lg-row">
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

            {/* คำแนะนำการเลือกวิธีชำระเงิน */}
            <h5 className="mb-1">เลือกวิธีการชำระเงิน</h5>
            <div className="text-muted small mb-3">แตะ/คลิกที่การ์ดเพื่อเลือก</div>

            {/* วิธีการชำระเงิน */}
            <div className="row mb-4">
              {/* PromptPay */}
              <div className="col-12 col-md-6 mb-3">
                <label className="payment-option w-100" aria-label="เลือกชำระเงินด้วยพร้อมเพย์ (PromptPay)">
                  <input
                    className="payment-option-input"
                    type="radio"
                    name="paymentMethod"
                    value="promptpay"
                    checked={selectedMethod === "promptpay"}
                    onChange={() => setSelectedMethod("promptpay")}
                  />
                  <div className={`card h-100 payment-card ${selectedMethod === "promptpay" ? "selected" : ""}`}>
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span>พร้อมเพย์ (PromptPay)</span>
                        <img
                          src={promptpayImage}
                          alt="PromptPay"
                          style={{ height: "24px" }}
                        />
                      </div>
                    </div>
                  </div>
                </label>
              </div>

              {/* Mobile Banking */}
              <div className="col-12 col-md-6 mb-3">
                <label className="payment-option w-100" aria-label="เลือกชำระเงินด้วยโมบายแบงก์กิ้ง">
                  <input
                    className="payment-option-input"
                    type="radio"
                    name="paymentMethod"
                    value="mobilebanking"
                    checked={selectedMethod === "mobilebanking"}
                    onChange={() => setSelectedMethod("mobilebanking")}
                  />
                  <div className={`card h-100 payment-card ${selectedMethod === "mobilebanking" ? "selected" : ""}`}>
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span>โมบายแบงก์กิ้ง</span>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/69/69524.png"
                          alt="Bank"
                          style={{ height: "24px" }}
                        />
                      </div>
                    </div>
                  </div>
                </label>
              </div>

              {/* ...removed Mastercard option... */}
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
                <button className="btn btn-primary  w-100 mt-3">
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
