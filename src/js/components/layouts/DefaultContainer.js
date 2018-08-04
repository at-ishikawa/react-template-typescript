// @flow
import React from 'react';
import Header from 'components/elements/DefaultHeader';
import Footer from 'components/elements/DefaultFooter';

import style from 'layouts/container.css';

type Props = {
  children: any
};

class Container extends React.Component<Props> {
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
