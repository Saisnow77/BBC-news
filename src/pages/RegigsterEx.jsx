// import React from "react";


// export default function RegigsterEx(){
//     return(
//        <div style={{backgroundColor:"red", color:"blue"}}>
//         <form>
//             <label>UserName</label><br/>
//             <input type="text"></input>
//             <label>Password</label>
//                 <input type="text" required/>
//                 <label>Mail ID</label>
//                 <input type="text" placeholder="Enter your mail id"></input>
//                 <label>Phone Number</label>
//                 <input type="text" required/>
//         </form>
//        </div>
//     )
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=DM+Sans:wght@300;400;500&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'DM Sans', sans-serif;
  }

  .page-bg {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0e0e12;
    padding: 2rem 1rem;
    overflow: hidden;
    position: relative;
  }

  /* Animated background orbs */
  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.25;
    animation: float 8s ease-in-out infinite;
    pointer-events: none;
  }
  .orb-1 {
    width: 400px; height: 400px;
    background: #3b5bdb;
    top: -100px; left: -100px;
    animation-delay: 0s;
  }
  .orb-2 {
    width: 300px; height: 300px;
    background: #7048e8;
    bottom: -80px; right: -80px;
    animation-delay: -3s;
  }
  .orb-3 {
    width: 200px; height: 200px;
    background: #0ca678;
    bottom: 100px; left: 40%;
    animation-delay: -5s;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) scale(1); }
    50% { transform: translateY(-30px) scale(1.05); }
  }

  /* Card */
  .reg-card {
    position: relative;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px;
    padding: 2.75rem 2.25rem;
    width: 100%;
    max-width: 440px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    animation: cardReveal 0.7s cubic-bezier(0.16,1,0.3,1) both;
  }

  @keyframes cardReveal {
    from {
      opacity: 0;
      transform: translateY(40px) scale(0.97);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  /* Shimmer border on card */
  .reg-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 1px;
    background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.02), rgba(120,100,255,0.2));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  /* Header */
  .reg-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #a5f3c8;
    background: rgba(10,200,120,0.12);
    border: 1px solid rgba(10,200,120,0.2);
    border-radius: 100px;
    padding: 4px 12px;
    margin-bottom: 1.25rem;
    animation: fadeSlideDown 0.5s 0.2s ease both;
  }
  .reg-badge-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #10d47e;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .reg-title {
    font-family: 'Playfair Display', serif;
    font-size: 30px;
    font-weight: 600;
    color: #ffffff;
    line-height: 1.2;
    margin-bottom: 6px;
    animation: fadeSlideDown 0.5s 0.3s ease both;
  }
  .reg-title span {
    color: #7c6ef5;
  }
  .reg-sub {
    font-size: 13.5px;
    color: rgba(255,255,255,0.45);
    margin-bottom: 2rem;
    animation: fadeSlideDown 0.5s 0.35s ease both;
  }

  @keyframes fadeSlideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Fields */
  .field {
    margin-bottom: 1.1rem;
    animation: fieldSlideIn 0.5s ease both;
  }
  .field:nth-child(1) { animation-delay: 0.4s; }
  .field:nth-child(2) { animation-delay: 0.5s; }
  .field:nth-child(3) { animation-delay: 0.6s; }
  .field:nth-child(4) { animation-delay: 0.7s; }

  @keyframes fieldSlideIn {
    from { opacity: 0; transform: translateX(-16px); }
    to { opacity: 1; transform: translateX(0); }
  }

  .field-label {
    display: block;
    font-size: 11.5px;
    font-weight: 500;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.4);
    margin-bottom: 7px;
    transition: color 0.25s;
  }
  .field.focused .field-label {
    color: #a99fff;
  }

  .input-wrap {
    position: relative;
  }
  .input-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 15px;
    color: rgba(255,255,255,0.25);
    transition: color 0.25s;
    pointer-events: none;
  }
  .field.focused .input-icon {
    color: #7c6ef5;
  }

  .reg-input {
    width: 100%;
    padding: 11px 14px 11px 40px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: #ffffff;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    outline: none;
    transition: border-color 0.25s, background 0.25s, box-shadow 0.25s, transform 0.2s;
  }
  .reg-input::placeholder {
    color: rgba(255,255,255,0.2);
    font-size: 13px;
  }
  .reg-input:hover {
    border-color: rgba(255,255,255,0.2);
    background: rgba(255,255,255,0.07);
  }
  .reg-input:focus {
    border-color: rgba(124,110,245,0.7);
    background: rgba(124,110,245,0.08);
    box-shadow: 0 0 0 3px rgba(124,110,245,0.15);
    transform: scale(1.01);
  }

  /* Password strength */
  .strength-bar-wrap {
    display: flex;
    gap: 4px;
    margin-top: 7px;
    animation: fadeIn 0.3s ease;
  }
  .strength-seg {
    flex: 1;
    height: 3px;
    border-radius: 3px;
    background: rgba(255,255,255,0.1);
    transition: background 0.4s ease;
  }
  .strength-seg.active-weak   { background: #f03e3e; }
  .strength-seg.active-fair   { background: #f59f00; }
  .strength-seg.active-good   { background: #37b24d; }
  .strength-seg.active-strong { background: #10d47e; }
  .strength-label {
    font-size: 11px;
    color: rgba(255,255,255,0.35);
    margin-top: 4px;
    transition: color 0.3s;
  }

  /* Submit button */
  .reg-btn-wrap {
    margin-top: 1.5rem;
    animation: fieldSlideIn 0.5s 0.8s ease both;
  }
  .reg-btn {
    width: 100%;
    padding: 13px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14.5px;
    font-weight: 500;
    letter-spacing: 0.3px;
    color: #fff;
    background: linear-gradient(135deg, #5a4fcf, #7c6ef5);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.15s, box-shadow 0.2s;
  }
  .reg-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(124,110,245,0.35);
  }
  .reg-btn:active {
    transform: translateY(0) scale(0.98);
    box-shadow: none;
  }
  /* Shimmer sweep on hover */
  .reg-btn::after {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transition: left 0.4s ease;
  }
  .reg-btn:hover::after {
    left: 160%;
  }

  .reg-btn.loading {
    pointer-events: none;
  }
  .reg-btn.loading .btn-text { opacity: 0; }
  .reg-btn.loading .btn-spinner {
    display: flex;
  }

  .btn-text {
    transition: opacity 0.2s;
  }
  .btn-spinner {
    display: none;
    position: absolute;
    inset: 0;
    align-items: center;
    justify-content: center;
  }
  .spinner-ring {
    width: 18px; height: 18px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Success state */
  .success-overlay {
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: rgba(14,14,18,0.95);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s;
    z-index: 10;
  }
  .success-overlay.show {
    opacity: 1;
    pointer-events: all;
  }
  .check-circle {
    width: 64px; height: 64px;
    border-radius: 50%;
    background: rgba(16,212,126,0.12);
    border: 1px solid rgba(16,212,126,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: popIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both;
  }
  @keyframes popIn {
    from { transform: scale(0.5); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  .check-circle svg {
    stroke-dasharray: 40;
    stroke-dashoffset: 40;
    animation: drawCheck 0.5s 0.3s ease forwards;
  }
  @keyframes drawCheck {
    to { stroke-dashoffset: 0; }
  }
  .success-text {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    color: #fff;
    animation: fadeIn 0.4s 0.4s ease both;
  }
  .success-sub {
    font-size: 13px;
    color: rgba(255,255,255,0.4);
    animation: fadeIn 0.4s 0.5s ease both;
  }

  @keyframes fadeIn {
    from { opacity: 0; } to { opacity: 1; }
  }

  /* Divider + footer */
  .divider {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 1.5rem 0 1.25rem;
    animation: fadeIn 0.5s 0.85s ease both;
  }
  .divider::before, .divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255,255,255,0.07);
  }
  .divider span {
    font-size: 12px;
    color: rgba(255,255,255,0.25);
  }

  .signin-link {
    text-align: center;
    font-size: 13px;
    color: rgba(255,255,255,0.35);
    animation: fadeIn 0.5s 0.9s ease both;
  }
  .signin-link a {
    color: #a99fff;
    text-decoration: none;
    font-weight: 500;
  }
  .signin-link a:hover {
    text-decoration: underline;
  }
`;

function getStrength(pwd) {
  if (!pwd) return { score: 0, label: "", color: "" };
  let score = 0;
  if (pwd.length >= 8) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  const labels = ["", "Weak", "Fair", "Good", "Strong"];
  const colors = ["", "active-weak", "active-fair", "active-good", "active-strong"];
  return { score, label: labels[score], colorClass: colors[score] };
}

export default function RegisterEx() {
  const [fields, setFields] = useState({ username: "", password: "", email: "", phone: "" });
  const [focused, setFocused] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const strength = getStrength(fields.password);

  const handleChange = (key, val) => setFields(f => ({ ...f, [key]: val }));
  const handleFocus = (key) => setFocused(f => ({ ...f, [key]: true }));
  const handleBlur = (key) => setFocused(f => ({ ...f, [key]: false }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1800);
  };

  const inputFields = [
    { key: "username", label: "Username", type: "text", icon: "👤", placeholder: "e.g. john_doe" },
    { key: "password", label: "Password", type: "password", icon: "🔒", placeholder: "Min. 8 characters" },
    { key: "email",    label: "Mail ID",  type: "email",    icon: "✉️", placeholder: "you@example.com" },
    { key: "phone",    label: "Phone Number", type: "tel", icon: "📱", placeholder: "+91 98765 43210" },
  ];

  return (
    <>
      <style>{styles}</style>

      <div className="page-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="reg-card">

          {/* Success overlay */}
          <div className={`success-overlay${success ? " show" : ""}`}>
            <div className="check-circle">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <polyline points="5,14 11,20 23,8" stroke="#10d47e" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="success-text">You're all set!</p>
            <p className="success-sub">Account created successfully.</p>
          </div>

          {/* Badge */}
          <div className="reg-badge">
            <span className="reg-badge-dot" />
            New here
          </div>

          {/* Heading */}
          <h1 className="reg-title">Create your <span>account</span></h1>
          <p className="reg-sub">Join us — it only takes a minute.</p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {inputFields.map(({ key, label, type, icon, placeholder }) => (
              <div key={key} className={`field${focused[key] ? " focused" : ""}`}>
                <label className="field-label">{label}</label>
                <div className="input-wrap">
                  <span className="input-icon" style={{ fontSize: "14px" }}>{icon}</span>
                  <input
                    className="reg-input"
                    type={type}
                    placeholder={placeholder}
                    value={fields[key]}
                    onChange={e => handleChange(key, e.target.value)}
                    onFocus={() => handleFocus(key)}
                    onBlur={() => handleBlur(key)}
                    required={key === "password" || key === "phone"}
                  />
                </div>

                {/* Password strength meter */}
                {key === "password" && fields.password && (
                  <>
                    <div className="strength-bar-wrap">
                      {[1, 2, 3, 4].map(i => (
                        <div
                          key={i}
                          className={`strength-seg${i <= strength.score ? ` ${strength.colorClass}` : ""}`}
                        />
                      ))}
                    </div>
                    <p className="strength-label">{strength.label} password</p>
                  </>
                )}
              </div>
            ))}

            <div className="reg-btn-wrap">
              <button
                type="submit"
                className={`reg-btn${loading ? " loading" : ""}`}
              >
                <span className="btn-text">Create account →</span>
                <span className="btn-spinner">
                  <span className="spinner-ring" />
                </span>
              </button>
            </div>
          </form>

          <div className="divider"><span>or</span></div>
          <p className="signin-link">
            Already have an account? <Link to="/lo">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}