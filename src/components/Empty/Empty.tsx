import React, { Component } from 'react';
import { Wrapper } from './styled/Empty.styled';
import { WithTranslation } from 'react-i18next';

class Empty extends Component<WithTranslation> {
  render() {
    const { t } = this.props;
    return <Wrapper>{t('resource.empty')}</Wrapper>;
  }
}

export default Empty;
