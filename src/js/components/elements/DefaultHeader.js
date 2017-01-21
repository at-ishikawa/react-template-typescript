import React from 'react';

import style from 'modules/header';

class DefaultHeader extends React.Component {
  render() {
    return (
      <header className={ style.header }>
        Header
      </header>
    );
  }
}

export default DefaultHeader;
