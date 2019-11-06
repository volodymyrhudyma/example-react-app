import { connect } from 'react-redux';
import { IAppState, IArticle } from 'src/types';
import Component from './ListItem';
import { readArticle, deleteArticle } from 'src/actions/article';
import { withTranslation } from 'react-i18next';

const mapStateToProps = (state: IAppState) => ({
  layout: state.layout.layout,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    readArticle: (article: IArticle) => dispatch(readArticle(article)),
    deleteArticle: (id: number) => dispatch(deleteArticle(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Component));
