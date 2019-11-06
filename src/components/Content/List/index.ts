import { connect } from 'react-redux';
import { IAppState } from 'src/types';
import Component from './List';
import { fetchArticles } from 'src/actions/article';
import { withTranslation } from 'react-i18next';

const mapStateToProps = (state: IAppState) => ({
  layout: state.layout.layout,
  fetching: state.article.articles.fetching,
  error: state.article.articles.error,
  data: state.article.articles.data,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchArticles: () => dispatch(fetchArticles()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Component));
