import React from "react";
import logo from "../../assets/images/logo.svg";
import iconFB from "../../assets/icons/iconFB.svg";
import iconIG from "../../assets/icons/iconIG.svg";
import iconChat from "../../assets/icons/iconChat.svg";

function getJSXList(arr) {
  return arr.map((item) => (
    <a className="page-link" href="#" key={item}>
      {item}
    </a>
  ));
}

function FooterSection({ title, children }) {
  return (
    <section className="footer-section">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
}

function Footer() {
  return (
    <>
      {/* <!-- footer --> */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-logo-container">
            <img src={logo} alt="logo" className="icon-logo" />
          </div>

          <FooterSection title="客戶服務">
            {getJSXList(["運送說明", "退換貨相關", "付款資訊", "FAQ"])}
          </FooterSection>

          <FooterSection title="關於我們">
            {getJSXList(["品牌故事", "媒體聯繫", "Press kit"])}
          </FooterSection>

          <FooterSection title="資訊">
            {getJSXList(["隱私權政策", "Cookie", "GDPR"])}
          </FooterSection>

          <FooterSection title="追蹤 ALPHA Shop">
            <div className="tel-info">+886 02123-45678</div>
            <div className="social-icon-group">
              <img
                src={iconFB}
                alt="iconFB"
                className="social-icon cursor-point"
              />
              <img
                src={iconIG}
                alt="iconIG"
                className="social-icon cursor-point"
              />
              <img
                src={iconChat}
                alt="iconChat"
                className="social-icon cursor-point"
              />
            </div>
          </FooterSection>
        </div>
      </footer>
    </>
  );
}

export default Footer;
