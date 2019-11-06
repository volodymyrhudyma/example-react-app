import {
  SET_LAYOUT,
  SET_LAYOUT_FULFILLED,
  SET_LAYOUT_REJECTED,
} from 'src/constants/action-types';
import { TABLE } from 'src/constants/layout';

export interface ILayoutState {
  layout: string;
}

const initialState: ILayoutState = {
  layout: TABLE,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LAYOUT:
      return {
        ...state,
      };
    case SET_LAYOUT_FULFILLED:
      return {
        ...state,
        layout: action.payload,
      };
    case SET_LAYOUT_REJECTED:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
