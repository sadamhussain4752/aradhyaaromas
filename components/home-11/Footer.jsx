import Image from "next/image";
import CopyrightFooter from "../footer/common-footer/CopyrightFooter";
import FooterContent4 from "../footer/FooterContent4";

const Footer = () => {
  return (
    <footer className="main-footer style-six alternate -type-11">
      <div className="footer-bg-image">
        <Image
          width={376}
          height={376}
          src="/images/index-11/footer/1.webp"
          alt="image"
        />
      </div>
      {/* End footer-bg-image */}

      <div className="auto-container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="footer-title text-center">
              <h3>Got a question?</h3>
              <div>
                We are here to help. Check out our FAQs, send us an email or
                call us at 2 600 7777 9999
              </div>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End auto Container */}

      <div className="auto-container">
        {/* <!--Widgets Section--> */}
        <div className="widgets-section" data-aos="fade-up">
          <div className="row">
            <div className="big-column col-xl-3 col-lg-3 col-md-12">
              <div className="footer-column about-widget">
                <div className="logo">
                  <a href="#">
                    <Image
                      width={154}
                      height={50}
                      src="/images/logo-2.svg"
                      alt="brand"
                    />
                  </a>
                </div>
                <p className="phone-num">
                  <span>Call us </span>
                  <a href="thebeehost@support.com">+91 961 181 6233</a>
                </p>
                <p className="address">
                Laggere, Bangalore - 560058 <br/>
                  <a href="mailto:info@aradhyaaromas.com" className="email">
                    info@aradhyaaromas.com
                  </a>
                </p>
              </div>
            </div>
            {/* End footer left widget */}

            <div className="big-column col-xl-9 col-lg-9 col-md-12">
              <div className="row">
                <FooterContent4 />
              </div>
            </div>
            {/* End col-xl-8 */}
          </div>
        </div>
      </div>
      {/* End auto-container */}

      <CopyrightFooter />
      {/* <!--Bottom--> */}
    </footer>
  );
};

export default Footer;
