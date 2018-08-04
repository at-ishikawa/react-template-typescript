// @flow
import React from 'react';

import style from 'modules/footer.css';

type Props = {};

class DefaultFooter extends React.Component<Props> {
  render() {
    return (
      <footer className={ style.footer }>
        Footer
      </footer>
    );
  }
}

export default DefaultFooter;
