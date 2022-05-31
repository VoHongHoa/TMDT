import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Homeheader from "../Homepage/Homeheader/Homeheader";
import { addToCart } from "../../store/actions/AppAction";
import HomeFooter from "../Homepage/HomeFooter/HomeFooter";
import { findProduct, getProductByFilter } from "../../services/ProductService";
import "./Products.scss";
import { toast } from "react-toastify";
import { formatPrice } from "../../constants/format";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProduct: [],
      filterPrice: [],
      filterRam: [],
      filterRom: [],
      selectedPrice: "",
      category: "",
    };
  }
  componentDidMount() {
    this.getAllProductByCategory(this.props.match.params.category);
  }
  componentDidUpdate(preProps) {
    if (preProps.match.params !== this.props.match.params) {
      this.getAllProductByCategory(this.props.match.params.category);
    }
  }
  setSelectedPrice = () => {
    let Price = ["Tất cả", 50000, 100000, 200000, 400000, 800000];
    let arrPrice = [];
    for (let i = 0; i < Price.length; i++) {
      let objectPrice = {};
      if (i === 0) {
        objectPrice.label = Price[i];
        objectPrice.value = "";
      } else {
        objectPrice.label = `Từ ${formatPrice(Price[i])}`;
        objectPrice.value = Price[i];
      }

      arrPrice.push(objectPrice);
    }
    return arrPrice;
  };
  getAllProductByCategory = async category => {
    let res = await findProduct(category);
    if (res) {
      this.setState({
        allProduct: res.product,
        filterPrice: this.setSelectedPrice(),
      });
    }
  };
  handleAddToCart = item => {
    this.props.addToCart(item);
  };
  handleOnchangeSelect = (event, id) => {
    let name = id;
    let copyState = { ...this.state };
    copyState[name] = event.target.value;
    this.setState({
      ...copyState,
    });
  };
  handleFilterProduct = async () => {
    let data = {
      category: this.props.match.params.category,
      filterPrice: this.state.selectedPrice,
      filterRam: this.state.selectedRam,
      filterRom: this.state.selectedRom,
    };
    let res = await getProductByFilter(data);
    // console.log(res);
    if (res && res.errCode === 1) {
      toast.success(`Có ${res.products.length} sản phẩm`);
      this.setState({
        allProduct: res.products,
      });
    }
  };
  handleViewDetailProduct = product => {
    this.props.history.push(`/detail-product/${product._id}`);
  };
  render() {
    let { allProduct, filterPrice } = this.state;
    return (
      <div className="container product-page">
        <section className="homepage-header-container">
          <Homeheader />
        </section>
        <section id="sidebar">
          <p>
            Trang chủ | <b>{this.props.match.params.category}</b>
          </p>
        </section>
        <div className="filter-container mb-2 mt-2">
          <div className="filter">
            <div className="all-availble-price mb-2">
              <div className="title-select">Giá: </div>
              <select
                className="select-price"
                onChange={event =>
                  this.handleOnchangeSelect(event, "selectedPrice")
                }
              >
                {filterPrice &&
                  filterPrice.length > 0 &&
                  filterPrice.map((item, index) => {
                    return (
                      <option value={item.value} key={index}>
                        {item.label}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => this.handleFilterProduct()}
              >
                Lọc
              </span>
            </div>
          </div>
          <div className="container d-flex justify-content-center mt-50 mb-50 product-slide">
            <div className="row">
              {allProduct && allProduct.length > 0 ? (
                allProduct.map((item, index) => {
                  return (
                    <div className="col-md-4 mt-2" key={index}>
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

                          <div className="text-muted mb-3">34 đánh giá</div>

                          <button
                            type="button"
                            className="btn bg-cart"
                            onClick={() => this.handleAddToCart(item)}
                          >
                            <i className="fa fa-cart-plus mr-2"></i> Thêm vào
                            giỏ
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
        </div>
        <HomeFooter />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => dispatch(addToCart(item)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Products)
);
