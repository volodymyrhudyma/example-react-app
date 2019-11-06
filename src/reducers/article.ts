import {
  ARTICLES,
  ARTICLES_FULFILLED,
  ARTICLES_REJECTED,
  READ_ARTICLE,
  READ_ARTICLE_FULFILLED,
  READ_ARTICLE_REJECTED,
  DELETE_ARTICLE,
  DELETE_ARTICLE_FULFILLED,
  DELETE_ARTICLE_REJECTED,
} from 'src/constants/action-types';
import { IFetchState, IPendingState, IArticle } from 'src/types';

export interface IArticleState {
  articles: IFetchState<IArticle[]>;
  readAction: IPendingState;
  deleteAction: IPendingState;
}

const initialState: IArticleState = {
  articles: {
    fetching: false,
    error: undefined,
    data: [],
  },
  readAction: {
    pending: false,
    error: undefined,
  },
  deleteAction: {
    pending: false,
    error: undefined,
  },
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ARTICLES:
      return {
        ...state,
        articles: {
          ...state.articles,
          fetching: true,
        },
      };
    case ARTICLES_FULFILLED:
      return {
        ...state,
        articles: {
          ...state.articles,
          fetching: false,
          error: undefined,
          data: action.payload,
        },
      };
    case ARTICLES_REJECTED:
      return {
        ...state,
        articles: {
          ...state.articles,
          fetching: false,
          error: action.payload,
          data: [],
        },
      };
    case READ_ARTICLE:
      return {
        ...state,
        readAction: {
          ...state.readAction,
          pending: true,
        },
      };
    case READ_ARTICLE_FULFILLED:
      return {
        ...state,
        readAction: {
          ...state.readAction,
          pending: false,
          error: undefined,
        },
        articles: {
          ...state.articles,
          data: state.articles.data.map(item => {
            if (item.id === action.payload) {
              return {
                ...item,
                isRead: true,
              };
            }
            return item;
          }),
        },
      };
    case READ_ARTICLE_REJECTED:
      return {
        ...state,
        readAction: {
          ...state.readAction,
          pending: false,
          error: action.payload,
        },
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        deleteAction: {
          ...state.deleteAction,
          pending: true,
        },
      };
    case DELETE_ARTICLE_FULFILLED:
      return {
        ...state,
        deleteAction: {
          ...state.deleteAction,
          pending: false,
          error: undefined,
        },
        articles: {
          ...state.articles,
          data: state.articles.data.filter(item => item.id !== action.payload),
        },
      };
    case DELETE_ARTICLE_REJECTED:
      return {
        ...state,
        deleteAction: {
          ...state.deleteAction,
          pending: false,
          error: action.payload,
        },
      };
    default:
      return {
        ...state,
      };
  }
};
