import Component from './Stats';
import { connect } from 'react-redux';
import { IAppState, IArticle } from 'src/types';
import { readArticle } from 'src/actions/article';
import { withTranslation } from 'react-i18next';

const mapStateToProps = (state: IAppState) => ({
  articles: state.article.articles.data,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    readArticle: (article: IArticle) => dispatch(readArticle(article)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Component));
