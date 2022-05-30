import {
  handleLoginService,
  handlegetUserInfor,
  handleEditUser,
} from "../../services/UserService";
import { toast } from "react-toastify";
import { findProduct } from "../../services/ProductService";
//------------------cart action------------------------------
export const addToCart = (item) => {
  //console.log("check user:", user);
  return async (dispatch, getState) => {
    item.quantity = 1;
    dispatch(addToCartSuccess(item));
  };
};
export const addToCartFailded = () => ({
  type: "ADD_TO_CART_FAILED",
  item: [],
});
export const addToCartSuccess = (item) => ({
  type: "ADD_TO_CART_SUCCESS",
  item: item,
});

export const changeInputItem = (allItems) => {
  return async (dispatch, getState) => {
    dispatch(changeInputItemSuccess(allItems));
  };
};
export const changeInputItemFailded = () => ({
  type: "CHANGE_INPUT_ITEM_FAILED",
  allItems: [],
});
export const changeInputItemSuccess = (allItems) => ({
  type: "CHANGE_INPUT_ITEM_SUCCESS",
  allItems: allItems,
});

export const deleteItem = (item) => {
  return async (dispatch, getState) => {
    dispatch(deleteItemSuccess(item));
  };
};
export const deleteItemFailded = () => ({
  type: "DELETE_ITEM_FAILED",
  itemDelete: [],
});
export const deleteItemSuccess = (item) => ({
  type: "DELETE_ITEM_SUCCESS",
  itemDelete: item,
});
export const deleteCart = () => ({
  type: "DELETE_CART",
});
//----------------------------------------------------------

//------------------user action------------------------------

export const handleLogin = (data) => {
  return async (dispatch, getState) => {
    try {
      let respone = await handleLoginService(data);
      if (respone && respone.success === true) {
        localStorage.setItem("token", respone.tokens.accessToken);
        let userData = await handlegetUserInfor();
        dispatch(loginSuccess(userData, respone));
      } else {
        toast.error(respone.message);
        dispatch(loginFailed());
      }
    } catch (e) {
      console.error(e);
      dispatch(loginFailed());
    }
  };
};

export const loginSuccess = (data, loginInfor) => ({
  type: "LOGIN_SUCCESS",
  userData: data,
  loginInfor: loginInfor,
});
export const loginFailed = () => ({
  type: "LOGIN_FAILED",
  userData: {},
});

export const logOutSuccess = () => ({
  type: "LOGOUT_SUCCESS",
  userData: {},
  loginInfor: {},
});

export const editUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let respone = await handleEditUser(data);
      if (respone && respone.success === true) {
        toast.success(respone.message);
        dispatch(editUserSuccess(respone));
      } else {
        dispatch(editUserFailed());
      }
    } catch (e) {
      console.error(e);
      dispatch(editUserFailed());
    }
  };
};
export const editUserSuccess = (data) => ({
  type: "EDIT_USER_SUCCESS",
  userData: data,
});
export const editUserFailed = () => ({
  type: "EDIT_USER_FAILED",
  userData: {},
});
//---------------------------search-----------------------
export const searchProduct = (keyword) => {
  return async (dispatch, getState) => {
    try {
      console.log(keyword);
      let respone = await findProduct(keyword);
      console.log(respone);
      if (respone && respone.errCode === 1) {
        toast.success(respone.message);
        dispatch(searchProductSuccess(respone.product));
      } else {
        dispatch(searchProductFailed());
      }
    } catch (e) {
      console.error(e);
      dispatch(searchProductFailed());
    }
  };
};
export const searchProductSuccess = (data) => ({
  type: "SEARCH_PRODUCTS_SUCCESS",
  products: data,
});
export const searchProductFailed = () => ({
  type: "SEARCH_PRODUCTS_FAILED",
  userData: {},
});
