import React from "react";
import AboutUsClass from "./AboutUsClass";
import AboutSkeletonClass from "./AboutSkeletonClass";

class ShowAsyncClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
      counter: 0,
    };
    this.increaseCounter = this.increaseCounter.bind(this);
    console.log("first constructor");
  }
  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    if (prevState.counter !== this.state.counter) {
      console.log(`Counter updated to: ${this.state.counter}`);
    }
    console.log("fourth component did update called ");
  }
  componentDidMount(): void {
    console.log("third component did mount called");

    this.timer = setTimeout(() => {
      this.setState({
        loader: false,
      });
    }, 3000);
  }

  componentWillUnmount(): void {
    clearTimeout(this?.timer);
    console.log("fifth component unmount will call ");
  }

  increaseCounter() {
    this.setState((prev) => ({ ...prev, counter: prev.counter + 1 }));
  }

  render() {
    console.log("render component called");
    return (
      <>
        {this.state.loader ? (
          <AboutSkeletonClass />
        ) : (
          <>
            <AboutUsClass businessName={"FOODWOO"} />
            <div>
              <h2>Count : {this.state.counter}</h2>
              <button onClick={this.increaseCounter}>Increase counter</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ShowAsyncClass;
