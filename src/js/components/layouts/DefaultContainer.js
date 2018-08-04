// @flow
import React from 'react';
import Header from 'components/elements/DefaultHeader';
import Footer from 'components/elements/DefaultFooter';

import style from 'layouts/container.css';

class Container extends React.Component {
  render() {
    return (
      <div className={ style.container }>
        <Header />
        <main className={ style.main }>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

export default Container;
