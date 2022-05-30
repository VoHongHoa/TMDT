import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeFooter.scss";
class HomeFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="text-center text-lg-start bg-dark text-muted section-footer">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block text">
              <span className="text">
                Get connected with us on social networks:
              </span>
            </div>
            <div className="text">
              <a
                href="https://www.facebook.com/vohonghoaa1"
                className="me-4 text-reset"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.google.com/" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </a>
              <a
                href="https://github.com/VoHongHoa/Front_ReactJs_Nhom11.git"
                className="me-4 text-reset"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>
          <section>
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>UITSNEAKER
                  </h6>
                  <p>
                    UITSNEAKER nơi cung cấp các sản phẩm giày sneaker, nhận in
                    ấn sản phẩm theo yêu cầu của khách hàng
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    Hệ thống cửa hàng
                  </h6>
                  <p>
                    <a href="https://www.mongodb.com/" className="text-reset">
                      Đà Nẵng
                    </a>
                  </p>
                  <p>
                    <a href="https://expressjs.com/" className="text-reset">
                      Hồ Chí Minh
                    </a>
                  </p>
                  <p>
                    <a href="https://reactjs.org/" className="text-reset">
                      Hà Nội
                    </a>
                  </p>
                  <p>
                    <a href="https://nodejs.org/en/" className="text-reset">
                      Cần Thơ
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3"></i> UIT, Linh Trung, Thủ
                    Đức, Hồ Chí Minh
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    uitsneaker@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print me-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="text-center p-4 last-child">
            <a className="text-reset fw-bold" href="">
              UITSNEAKER
            </a>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
