import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { formatPrice } from "../../../constants/format";
import HomeFooter from "../HomeFooter/HomeFooter";
import Homeheader from "../Homeheader/Homeheader";
import "./Search.scss";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProduct: [],
    };
  }
  componentDidMount() {}
  handleViewDetailProduct = (product) => {
    this.props.history.push(`/detail-product/${product._id}`);
  };
  render() {
    return (
      <React.Fragment>
        <Homeheader />
        <div className="container d-flex justify-content-center mt-50 mb-50 product-slide">
          <div className="row">
            {this.props.allProduct && this.props.allProduct.length > 0 ? (
              this.props.allProduct.map((item, index) => {
                return (
                  <div className="col-md-4 mt-2">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-img-actions">
                          <img
                            src={item.img}
                            className="card-img img-fluid"
                            width="96"
                            height="350"
                            alt={item.title}
                            onClick={() => this.handleViewDetailProduct(item)}
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                      </div>

                      <div className="card-body bg-light text-center">
                        <div className="mb-2">
                          <h6 className="font-weight-semibold mb-2">
                            <a
                              href="#"
                              className="text-default mb-2"
                              data-abc="true"
                            >
                              {item.desc}
                            </a>
                          </h6>

                          <a href="#" className="text-muted" data-abc="true">
                            {item.title}
                          </a>
                        </div>

                        <h3 className="mb-0 font-weight-semibold">
                          {formatPrice(item.price)}
                        </h3>

                        <div>
                          <i className="fa fa-star star"></i>
                          <i className="fa fa-star star"></i>
                          <i className="fa fa-star star"></i>
                          <i className="fa fa-star star"></i>
                        </div>

                        <div className="text-muted mb-3">34 reviews</div>

                        <button
                          type="button"
                          className="btn bg-cart"
                          onClick={() => this.handleAddToCart(item)}
                        >
                          <i className="fa fa-cart-plus mr-2"></i> Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="title">Không có sản phẩm nào</div>
            )}
          </div>
        </div>

        <HomeFooter />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allProduct: state.products.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
