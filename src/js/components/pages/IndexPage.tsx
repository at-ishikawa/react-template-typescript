import * as React from "react";
import Button from "../atoms/Button";
import GuestContainer from "../layouts/GuestContainer";

type Props = {
  location: {
      pathname: string;
  },
};

interface State {
    counter: number;
};

class IndexPage extends React.Component<Props, State> {
  getText = () => "Index";

  constructor(props: any) {
      super(props);
      this.state = {
          counter: 0,
      };
  }

  increment = () => {
      this.setState({
          counter: this.state.counter + 1
      });
  }

  decrement = () => {
      this.setState({
          counter: this.state.counter - 1
      });
  }

  render() {
    const { location } = this.props;

    return (
      <GuestContainer>
        Page: {this.getText()}
        <br />
        Counter: {this.state.counter}
        <br />
        <Button onClick={this.increment}>Increment</Button>
        <br />
        <Button onClick={this.decrement}>Decrement</Button>
      </GuestContainer>
    );
  }
}

export default IndexPage;
