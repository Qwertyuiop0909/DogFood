import {
  ADD_FEEDBACK_REQUEST,
  ADD_NEW_PRODUCT_REQUEST,
  ADD_USER_REQUEST,
  CHANGE_PASSWORD_WITH_TOKEN_REQUEST,
  DELETE_FEEDBACK_REQUEST,
  DELETE_PRODUCT_REQUEST,
  DISLIKE_PRODUCT_REQUEST,
  EDIT_PRODUCT_REQUEST,
  EDIT_USER_AVATAR_REQUEST,
  EDIT_USER_INFO_REQUEST,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_REVIEWS_REQUEST,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_REWIEWS_FOR_PRODUCT_REQUEST,
  INIT_USER_REQUEST,
  LIKE_PRODUCT_REQUEST,
  RESET_PASSWORD_THROUGHT_EMAIL_REQUEST,
  SEARCH_PRODUCTS_REQUEST,
} from '../helpers/constants'

const PRODUCTS_REQUST_FUNCTION = (requestMethod, endPoint, data = undefined) => fetch(endPoint, {
  method: requestMethod,
  headers: {
    'Content-type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('token')}`,
    body: JSON.stringify(data),
  },
}).then((responce) => {
  if (responce.status !== 200) {
    throw new Error(responce.message)
  }
  return responce.json()
})

export const API = {
  getAllProducts: () => PRODUCTS_REQUST_FUNCTION('GET', GET_ALL_PRODUCTS_REQUEST),
  getProductById: (id) => PRODUCTS_REQUST_FUNCTION('GET', GET_PRODUCT_BY_ID_REQUEST + id),
  getProductsWithFilters: (sP) => PRODUCTS_REQUST_FUNCTION('GET', SEARCH_PRODUCTS_REQUEST + sP),
  addNewProduct: (data) => PRODUCTS_REQUST_FUNCTION('POST', ADD_NEW_PRODUCT_REQUEST, data),
  editProduct: (id, data) => PRODUCTS_REQUST_FUNCTION('PUT', EDIT_PRODUCT_REQUEST + id, data),
  deleteProduct: (id) => PRODUCTS_REQUST_FUNCTION('DELETE', DELETE_PRODUCT_REQUEST + id),
  likeProduct: (id) => PRODUCTS_REQUST_FUNCTION('PATCH', LIKE_PRODUCT_REQUEST + id),
  dislikeProduct: (id) => PRODUCTS_REQUST_FUNCTION('DELETE', DISLIKE_PRODUCT_REQUEST + id),
  getAllReviews: () => PRODUCTS_REQUST_FUNCTION('GET', GET_ALL_REVIEWS_REQUEST),
  getReviewsForProduct: (id) => PRODUCTS_REQUST_FUNCTION('GET', GET_REWIEWS_FOR_PRODUCT_REQUEST + id),
  addReview: (id) => PRODUCTS_REQUST_FUNCTION('POST', ADD_FEEDBACK_REQUEST + id),
  deleteReview: (id) => PRODUCTS_REQUST_FUNCTION('DELETE', DELETE_FEEDBACK_REQUEST + id),

  signUp: (userData) => fetch(ADD_USER_REQUEST, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(userData),
  }).then((responce) => {
    if (responce.status !== 201) {
      throw new Error(responce.message)
    }
    return responce.json()
  }),

  signIn: (signInData) => fetch(INIT_USER_REQUEST, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(signInData),
  }).then((responce) => {
    if (responce.status !== 200) {
      throw new Error(responce.message)
    }
    return responce.json()
  }),

  editUserData: (id, editData) => fetch(EDIT_USER_INFO_REQUEST + id, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(editData),
  }).then((responce) => {
    if (responce.status !== 200) {
      throw new Error(responce.message)
    }
    return responce.json()
  }),

  editUserAvatar: (id, newImage) => fetch(EDIT_USER_AVATAR_REQUEST + id, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newImage),
  }).then((responce) => {
    if (responce.status !== 200) {
      throw new Error(responce.message)
    }
    return responce.json()
  }),

  resetPasswordOnEmail: (data) => fetch(RESET_PASSWORD_THROUGHT_EMAIL_REQUEST, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((responce) => {
    if (responce.status !== 200) {
      throw new Error(responce.message)
    }
    return responce.json()
  }),

  changePassword: (id, token, password) => fetch(`${CHANGE_PASSWORD_WITH_TOKEN_REQUEST + id}/${token}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(password),
  }).then((responce) => {
    if (responce.status !== 200) {
      throw new Error(responce.message)
    }
    return responce.json()
  }),
}
