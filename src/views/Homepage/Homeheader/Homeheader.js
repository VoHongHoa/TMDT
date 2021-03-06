import React, { Component } from "react";
import { connect } from "react-redux";
import "./Homeheader.scss";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { logOutSuccess, searchProduct } from "../../../store/actions/AppAction";
import defaultAvatar from "../../../assets/images/defaultAvatar.jpg";
import { Link } from "react-router-dom";
import ChangePassword from "../../User/ChangePassword/ChangePassword";
class Homeheader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfor: "",
      isLogin: "",
      keyword: "",
      isOpenModal: false,
    };
  }
  componentDidMount() {
    this.setState({
      userInfor: this.props.userInfor,
      isLogin: this.props.isLogin,
    });
  }
  handleEditPassworduser = () => {
    this.setState({ isOpenModal: true });
  };
  toggleFromParent = () => {
    this.setState({
      isOpenModal: false,
    });
  };
  handleOpenLogin = () => {
    this.props.history.push("/login");
  };
  handleLogout = () => {
    this.props.logOutSuccess();
  };

  returnToHome = () => {
    this.props.history.push("/");
  };
  handleOpenEditUser = (id) => {
    this.props.history.push(`/user/${id}`);
  };
  handleOnChangeInput = (event) => {
    this.setState({
      keyword: event.target.value,
    });
  };
  getProductSearch = (keyword) => {
    this.props.searchProduct(keyword);
    this.props.history.push("/search");
  };
  render() {
    let { userInfor, isLogin } = this.props;
    let numOfitem = this.props.numOfItemInCart;

    return (
      <div className="header-container">
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
          {/* <a href="#" className="navbar-brand">
            
          </a> */}
          <Link to={"/"} className="navbar-brand" exact="true">
            <i className="fa fa-cube"></i>Uit<b>sneaker</b>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            id="navbarCollapse"
            className="collapse navbar-collapse justify-content-start"
          >
            <div className="navbar-nav">
              <NavLink
                to="/"
                className="nav-item nav-link"
                activeClassName="active"
                exact
              >
                Trang ch???
              </NavLink>
              {/* <a href="#" className="nav-item nav-link">
                About
              </a> */}
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Lo???i gi??y
                </a>
                <div className="dropdown-menu">
                  <NavLink
                    to="/products/Men"
                    className="dropdown-item"
                    activeClassName="active"
                    exact
                  >
                    Nam
                  </NavLink>
                  <NavLink
                    to="/products/Women"
                    className="dropdown-item"
                    activeClassName="active"
                    exact
                  >
                    N???
                  </NavLink>
                  <NavLink
                    to="/products/Oversized"
                    className="dropdown-item"
                    activeClassName="active"
                    exact
                  >
                    Gi??y qu?? c???
                  </NavLink>
                  <NavLink
                    to="/Custom"
                    className="dropdown-item"
                    activeClassName="active"
                    exact
                  >
                    Custom sneaker
                  </NavLink>
                </div>
              </div>
              {/* <a href="#" className="nav-item nav-link">
                Blog
              </a> */}
              <a href="#" className="nav-item nav-link">
                Li??n h???
              </a>
            </div>
            <form className="navbar-form form-inline">
              <div className="input-group search-box">
                <input
                  type="text"
                  id="search"
                  className="form-control"
                  placeholder="Search by Name"
                  onChange={(event) => this.handleOnChangeInput(event)}
                />
                <span className="input-group-addon">
                  <i
                    className="material-icons"
                    onClick={() => this.getProductSearch(this.state.keyword)}
                    style={{ cursor: "pointer" }}
                  >
                    &#xE8B6;
                  </i>
                </span>
              </div>
            </form>
            <div className="navbar-nav ml-auto">
              <a href="#" className="nav-item nav-link notifications">
                <i className="fa fa-bell-o"></i>
                <span className="badge">1</span>
              </a>

              <Link
                to="/cart"
                className="nav-item nav-link messages"
                exact="true"
              >
                <i className="fas fa-shopping-cart"></i>
                <span className="badge">{numOfitem}</span>
              </Link>
              {isLogin && isLogin === true ? (
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    data-toggle="dropdown"
                    className="nav-link dropdown-toggle user-action"
                  >
                    <img
                      src={
                        userInfor.user.img ? userInfor.user.img : defaultAvatar
                      }
                      className="avatar"
                      alt="Avatar"
                    />{" "}
                    {userInfor.user.fullname}
                    <b className="caret"></b>
                  </a>
                  <div className="dropdown-menu">
                    <NavLink
                      to={`/user/${userInfor.user._id}`}
                      className="dropdown-item"
                      activeClassName="active"
                      exact
                    >
                      <i className="fa fa-user-o"></i> H??? s?? ng?????i d??ng
                    </NavLink>

                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={() => this.handleEditPassworduser()}
                    >
                      <i className="fa-solid fa-key"></i> ?????i m???t kh???u
                    </a>
                    <NavLink
                      to="/cart"
                      className="dropdown-item"
                      activeClassName="active"
                      exact
                    >
                      <i className="fas fa-shopping-cart"></i> Gi??? h??ng
                    </NavLink>

                    <NavLink
                      to="/user-orders"
                      className="dropdown-item"
                      activeClassName="active"
                      exact
                    >
                      <i className="fas fa-shopping-bag"></i> ????n h??ng
                    </NavLink>

                    {this.props.userInfor &&
                      this.props.userInfor.user &&
                      this.props.userInfor.user.role &&
                      this.props.userInfor.user.role === "admin" && (
                        <NavLink
                          to="/admin"
                          className="dropdown-item"
                          activeClassName="active"
                          exact
                        >
                          <i className="fas fa-tools"></i>Chuy???n qua Admin
                        </NavLink>
                      )}
                    <div className="dropdown-divider"></div>
                    <p
                      className="dropdown-item"
                      onClick={() => this.handleLogout()}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="material-icons">&#xE8AC;</i> ????ng xu???t
                    </p>
                  </div>
                </div>
              ) : (
                <button
                  className="btn btn-light"
                  onClick={() => this.handleOpenLogin()}
                >
                  ????ng nh???p
                </button>
              )}
            </div>
          </div>
        </nav>
        {this.props.userInfor.user && this.props.userInfor.user._id && (
          <ChangePassword
            isOpen={this.state.isOpenModal}
            toggleFromParent={this.toggleFromParent}
            userId={this.props.userInfor.user._id}
          />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLogin: state.user.isLogin,
    userInfor: state.user.userInfor,
    numOfItemInCart: state.cart.cart.length,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logOutSuccess: () => dispatch(logOutSuccess()),
    searchProduct: (keyword) => dispatch(searchProduct(keyword)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Homeheader)
);
