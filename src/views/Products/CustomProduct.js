import React, { Component } from "react";
import Homeheader from "../Homepage/Homeheader/Homeheader";
import HomeFooter from "../Homepage/HomeFooter/HomeFooter";
import custom from "../../assets/images/custom.jpg";
import "./CustomProduct.scss";

class CustomProduct extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <section className="homepage-header-container">
            <Homeheader />
          </section>
          <section id="sidebar">
            <p>
              Trang chủ | Sản phẩm | <b>Custom</b>
            </p>
          </section>
          <div className="title-custom">
            <br />
            <br />
            <h3>Bạn muốn custom sneaker?</h3>
            <h5>
              Vui lòng liên hệ qua facebook{" "}
              <a href="https://www.facebook.com/uitsneaker/">UITsneaker</a> hoặc
              đến trực tiếp shop nhé!
            </h5>
            <br />
            <br />
          </div>
          <div className="custom_picture">
            <img
              className="custom_picture"
              src={custom}
              alt="custom-sneaker-piture"
            />
            <br />
            <br />
          </div>
          <HomeFooter />
        </div>
      </React.Fragment>
    );
  }
}

export default CustomProduct;
