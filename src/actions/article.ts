import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
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
import { IArticle } from 'src/types';
import axios from 'src/constants/axios';

export const fetchArticles = (): ThunkAction<
  Promise<void>,
  string,
  null,
  {
    type: string;
    payload?: IArticle[] | string;
  }
> => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ARTICLES,
    });
    try {
      const response = await axios.get('/articles');
      const articles: IArticle[] = response.data;
      dispatch({
        type: ARTICLES_FULFILLED,
        payload: articles,
      });
    } catch (error) {
      dispatch({
        type: ARTICLES_REJECTED,
        payload: error.toString(),
      });
    }
  };
};

export const readArticle = (
  article: IArticle
): ThunkAction<
  Promise<void>,
  string,
  null,
  {
    type: string;
    payload?: number | string;
  }
> => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: READ_ARTICLE,
    });
    try {
      await axios.put(`/articles/${article.id}`, {
        ...article,
        isRead: true,
      });
      dispatch({
        type: READ_ARTICLE_FULFILLED,
        payload: article.id,
      });
    } catch (error) {
      dispatch({
        type: READ_ARTICLE_REJECTED,
        payload: error.toString(),
      });
    }
  };
};

export const deleteArticle = (
  id: number
): ThunkAction<
  Promise<void>,
  string,
  null,
  {
    type: string;
    payload?: number | string;
  }
> => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: DELETE_ARTICLE,
    });
    try {
      await axios.delete(`/articles/${id}`);
      dispatch({
        type: DELETE_ARTICLE_FULFILLED,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: DELETE_ARTICLE_REJECTED,
        payload: error.toString(),
      });
    }
  };
};
