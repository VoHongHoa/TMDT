import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "./Homepage/Homepage";
import Product from "./Products/Product";
import DetailProduct from "./DetailProduct/DetailProduct";
import Login from "./User/Login/Login";
import EditUser from "./User/EditUser/EditUser";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import UserManage from "./Admin/AdminPage/UserManage";
import ProductManage from "./Admin/AdminPage/ProductManage";
import ForgotPassword from "./User/ForgotPassword/ForgotPassword";
import Oder from "./User/Oder/Oder";
import ManageOrder from "./Admin/AdminPage/ManageOrder";
import Dashboard from "./Admin/AdminPage/Dashboard";
import Search from "./Homepage/Search/Search";
import ModalCart from "./Homepage/Homeheader/ModalCart/ModalCart";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import CustomProduct from "./Products/CustomProduct";
import UserOrder from "./Homepage/Homeheader/UserOrder";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    let { isLogin, userInfor } = this.props;

    return (
      <BrowserRouter>
        <PayPalScriptProvider
          options={{ "client-id": process.env.REACT_APP_CLIENT_ID_PAYPAL }}
        >
          <div className="App">
            <Switch>
              <Route path="/" exact>
                <Homepage />
              </Route>
              <Route path="/search" exact>
                <Search />
              </Route>
              <Route path="/cart" exact>
                <ModalCart />
              </Route>
              <Route path="/order" exact>
                <Oder />
              </Route>
              <Route path="/products/:category" exact>
                <Product />
              </Route>
              <Route path="/detail-product/:id">
                <DetailProduct />
              </Route>
              <Route path="/Custom">
                <CustomProduct />
              </Route>
              <Route exact path="/login">
                {isLogin ? <Redirect to="/" /> : <Login />}
              </Route>
              <Route exact path="/user/:id">
                {isLogin === false ? <Redirect to="/login" /> : <EditUser />}
              </Route>
              <Route path="/forgotpassword" exact>
                <ForgotPassword />
              </Route>
              <Route exact path="/admin">
                {isLogin === true &&
                userInfor &&
                userInfor.user &&
                userInfor.user.role === "admin" ? (
                  <Dashboard />
                ) : (
                  <Redirect to="/login" />
                )}
              </Route>
              <Route exact path="/admin/user">
                {isLogin === true &&
                userInfor &&
                userInfor.user &&
                userInfor.user.role === "admin" ? (
                  <UserManage />
                ) : (
                  <Redirect to="/login" />
                )}
              </Route>

              <Route path="/admin/product" exact>
                {isLogin === true &&
                userInfor &&
                userInfor.user &&
                userInfor.user.role === "admin" ? (
                  <ProductManage />
                ) : (
                  <Redirect to="/login" />
                )}
              </Route>

              <Route path="/admin/order" exact>
                {isLogin === true &&
                userInfor &&
                userInfor.user &&
                userInfor.user.role === "admin" ? (
                  <ManageOrder />
                ) : (
                  <Redirect to="/login" />
                )}
              </Route>

              <Route path="/order" exact>
                {isLogin === true && userInfor ? (
                  <Oder />
                ) : (
                  <Redirect to="/login" />
                )}
              </Route>
              <Route path="/user-orders" exact>
                {isLogin === true ? <UserOrder /> : <Redirect to="/login" />}
              </Route>
            </Switch>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
        </PayPalScriptProvider>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLogin: state.user.isLogin,
    userInfor: state.user.userInfor,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
