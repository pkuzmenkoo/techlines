import axios from "axios";
import { setError, shippingAddress, clearOrder } from "../slices/order";
export const setShippingAddress = (data) => (dispatch) => {
    dispatch(shippingAddress(data));
};

export const setShippingAddressError = (value) => (dispatch) => {
    dispatch(setError(value));
};

export const createOrder = (order) => async (dispatch, getState) => {
    const {
        order: { shippingAddress },
        user: { userInfo },
    } = getState();

    const preparedOrder = { ...order, shippingAddress };
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
                "Content-Type": "application/json",
            },
        };

        await axios.post("api/orders", preparedOrder, config);
    } catch (error) {
        dispatch(
            setError(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
                    ? error.message
                    : "An unexpected error has occured. Please try again later."
            )
        );
    }
};

export const resetOrder = () => (dispatch) => {
    dispatch(clearOrder());
};
