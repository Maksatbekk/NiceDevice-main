

import {combineReducers} from "redux";
import user from "./user/user";
import apple from "./apple/apple"
import goods from "./goods/goods"
import samsung from "./samsung/samsung";
import xiaomi from "./xiaomi/xiaomi";
import cart from "./cart/cart";
import modal from "./modal/modal"
import favourites from "./favourites/favourites";

const rootReducer = () => {
  return combineReducers({
      user,
      cart,
      goods,
      apple,
      samsung,
      xiaomi,
      modal,
      favourites

  })
};

export default rootReducer;