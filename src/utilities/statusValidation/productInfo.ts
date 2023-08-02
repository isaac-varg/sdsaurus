import { statusActions } from "@/redux/statusSlice";
import { store } from "@/redux/store"

export const checkProductInfo = () => {
    const name = store.getState().info.productName;
    const code = store.getState().info.productCode;

    if (name && code) {
        store.dispatch(statusActions.setProductInfo(true))
    }

}
