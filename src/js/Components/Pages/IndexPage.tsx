import * as React from "react";
import Button from "../Atoms/Button";
import GuestContainer from "../Layouts/GuestContainer";
import Helmet from "react-helmet";

type Props = {
  location: {
    pathname: string;
  };
};

interface State {
  counter: number;
}

class IndexPage extends React.Component<Props, State> {
  getText = () => "Index";

  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    const { location } = this.props;

    return (
      <GuestContainer>
        <Helmet>
          <title>title</title>
          <meta name="description" content="description" />
          <meta name="keywords" content="react,typescript" />
        </Helmet>
        Page: {this.getText()}
        <br />
        Counter: <span className="counter">{this.state.counter}</span>
        <br />
        <Button onClick={this.increment}>Increment</Button>
        <br />
        <Button onClick={this.decrement}>Decrement</Button>
      </GuestContainer>
    );
  }
}

export default IndexPage;
