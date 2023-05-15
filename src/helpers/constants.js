// USER
export const ADD_USER_REQUEST = 'https://api.react-learning.ru/signup/'
export const INIT_USER_REQUEST = 'https://api.react-learning.ru/signin/'
export const EDIT_USER_INFO_REQUEST = 'https://api.react-learning.ru/v2/sm8/users/me/'
export const EDIT_USER_AVATAR_REQUEST = 'https://api.react-learning.ru/v2/sm8/users/me/avatar/'

// PRODUCTS
export const GET_ALL_PRODUCTS_REQUEST = 'https://api.react-learning.ru/products/'
export const SEARCH_PRODUCTS_REQUEST = 'https://api.react-learning.ru/products/search?query='
export const GET_PRODUCT_BY_ID_REQUEST = 'https://api.react-learning.ru/products/'
export const ADD_NEW_PRODUCT_REQUEST = 'https://api.react-learning.ru/products/'
export const EDIT_PRODUCT_REQUEST = 'https://api.react-learning.ru/products/'
export const DELETE_PRODUCT_REQUEST = 'https://api.react-learning.ru/products/likes/'
export const LIKE_PRODUCT_REQUEST = 'https://api.react-learning.ru/products/likes/'
export const DISLIKE_PRODUCT_REQUEST = 'https://api.react-learning.ru/products/likes/'
export const ADD_FEEDBACK_REQUEST = 'https://api.react-learning.ru/products/review/:productId'
export const DELETE_FEEDBACK_REQUEST = 'https://api.react-learning.ru/products/review/'
export const GET_ALL_REVIEWS_REQUEST = 'https://api.react-learning.ru/products/review/'
export const GET_REWIEWS_FOR_PRODUCT_REQUEST = 'https://api.react-learning.ru/products/review/'
export const RESET_PASSWORD_THROUGHT_EMAIL_REQUEST = 'https://api.react-learning.ru/password-reset'
export const CHANGE_PASSWORD_WITH_TOKEN_REQUEST = 'https://api.react-learning.ru/password-reset/'

// REQUEST KEYS
export const ALL_PRODUCTS_QUERY_KEY = ['ALL_PRODUCTS_QUERY_KEY']
export const getCurrentQueryKey = (id) => [
  'CURRENT_PRODUCT_KEY',
  id,
]
export const SIGN_UP_QUERYKEY = ['SIGN_UP_QUERY_KEY']
export const SIGN_IN_QUERYKEY = ['SIGN_IN_QUERY_KEY']
