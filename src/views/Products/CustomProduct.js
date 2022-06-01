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
          <div className="detail-custom">
            <h7>
              Chỉ với 3 bước đơn giản, bạn sẽ có được đôi custom sneaker độc
              nhất dành cho riêng bạn.
              <br />
              UITsneaker cung cấp cho bạn 2 lựa chọn custom sneaker
              <br />
              1. Đến trực tiếp shop để được hỗ trợ custom sneaker
              <br />
              2. Gửi bản thiết kế custom và UITsneaker sẽ hiện thực chúng.
              <br />
              ------------------------------------------------
              <br />
              <br />3 bước custom sneaker (Hình thức 2)
              <br />
              Bước 1: Chọn mẫu sneaker bạn thích trên hệ thống UITsneaker
              <br />
              Bước 2: Nhắn tin trực tiếp với shop, gửi kèm mẫu giày bạn chọn và
              bản thiết kế của bạn để được tư vấn
              <br />
              Bước 3: UITsneaker sẽ mang đôi custom sneaker đến tận tay bạn
            </h7>
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
