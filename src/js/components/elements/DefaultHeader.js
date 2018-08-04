// @flow
import React from 'react';

import style from 'modules/header.css';

type Props = {};

class DefaultHeader extends React.Component<Props> {
  render() {
    return (
      <header className={ style.header }>
        Header
      </header>
    );
  }
}

export default DefaultHeader;
