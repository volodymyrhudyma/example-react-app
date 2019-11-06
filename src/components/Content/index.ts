import { connect } from 'react-redux';
import { setLayout } from 'src/actions/layout';
import { IAppState } from 'src/types';
import Component from './Content';
import { withTranslation } from 'react-i18next';

const mapStateToProps = (state: IAppState) => ({
  layout: state.layout.layout,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    setLayout: (layout: string) => dispatch(setLayout(layout)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Component));
