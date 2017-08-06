// @flow
import React from 'react';
import DocumentMeta from 'react-document-meta';
import Env from 'Env';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as IndexActions from 'actions/index';

@connect(
  state => ({
    counter: state.index.counter
  }),
  dispatch => ({
    ...bindActionCreators(IndexActions, dispatch)
  })
)
class IndexPage extends React.Component {

  getText = () => {
    return 'Index';
  }

  render() {
    const meta = {
      title: 'Sample Title',
      description: 'Sample Description',
      canonical: Env.appUrl + this.props.location.pathname,
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'sample'
        }
      }
    };

    return (
      <div>
        <DocumentMeta {...meta} />
        Page: { this.getText() }
        <br />
        Counter: { this.props.counter }
        <br />
        <button onClick={ this.props.increment }>Increment</button>
        <br />
        <button onClick={ this.props.decrement }>Decrement</button>
      </div>
    );
  }
}

export default IndexPage;
