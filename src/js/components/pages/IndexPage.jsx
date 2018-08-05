// @flow
import React from "react";
import DocumentMeta from "react-document-meta";
import Env from "Env";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as IndexActions from "../../actions/index";
import Button from "../atoms/Button";
import DefaultContainer from "../layouts/DefaultContainer";

type Props = {
  counter: number,
  location: Object,
  increment: () => void,
  decrement: () => void
};

@connect(
  state => ({
    counter: state.index.counter
  }),
  dispatch => ({
    ...bindActionCreators(IndexActions, dispatch)
  })
)
class IndexPage extends React.Component<Props> {
  getText = () => "Index";

  render() {
    const { counter, location, increment, decrement } = this.props;

    const meta = {
      title: "Sample Title",
      description: "Sample Description",
      canonical: Env.appUrl + location.pathname,
      meta: {
        charset: "utf-8",
        name: {
          keywords: "sample"
        }
      }
    };

    return (
      <DefaultContainer>
        <DocumentMeta {...meta} />
        Page: {this.getText()}
        <br />
        Counter: {counter}
        <br />
        <Button onClick={increment}>Increment</Button>
        <br />
        <Button onClick={decrement}>Decrement</Button>
      </DefaultContainer>
    );
  }
}

export default IndexPage;
