import React from 'react';
import Header from 'components/elements/DefaultHeader';
import Footer from 'components/elements/DefaultFooter';
import GoogleTagManager from '../GoogleTagManager';
import Env from 'Env';

import style from 'layouts/container';

class Container extends React.Component {
  render() {
    return (
      <div className={ style.container }>
        <GoogleTagManager gtmId={Env.gtmId} />
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
