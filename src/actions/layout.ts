import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  SET_LAYOUT,
  SET_LAYOUT_FULFILLED,
  SET_LAYOUT_REJECTED,
} from 'src/constants/action-types';

export const setLayout = (
  layout: string
): ThunkAction<
  Promise<void>,
  string,
  null,
  {
    type: string;
    payload?: string;
  }
> => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: SET_LAYOUT,
    });
    try {
      dispatch({
        type: SET_LAYOUT_FULFILLED,
        payload: layout,
      });
    } catch (error) {
      dispatch({
        type: SET_LAYOUT_REJECTED,
        payload: error.toString(),
      });
    }
  };
};
