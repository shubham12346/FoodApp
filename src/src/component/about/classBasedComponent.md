# Life cycles of class based component in React 
1. Contructor 
- First the contructor method is called . We have also call the super(props) with props if we have any props to 
 initialize our parent constructor with current props 

2. render 
- Second is the render method is called which pwe can say return the jsx and shows ui.

3. componentDidMount 
- third is componentDidMount third called in case we need to perform any AJAX call 
  we have to do it here.

4. componentDidUpdate 
- This is the method triggers after any state we initialized is changed , so we can 
  write our custom functionality based on the state change

5. componentWillunmount 
- This is called when the component is removed form the UI or dom , here we can remove 
  or clean or tear down all the resources or any ajax call was ongoing  ,we can remove 
 from our memory 

An example with loader 

```
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
``` 

# Why useEffect callback is not async ?
useEffect itself cannot directly accept an async callback function. This is because useEffect
expects its callback function to return either nothing (i.e., undefined) or a cleanup
function, and it doesn't work well with Promises returned from async functions.

because of majorly two reasons 
1. Return Value Expectation - The primary purpose of the useEffect callback function is
to handle side effects and perform cleanup. React expects us to either return
nothing (i.e., undefined) from the callback or return a cleanup function. An async
function returns a Promise, and it doesn't fit well with this expected behavior.

2.Execution Order and Timing - With async functions, we might not have fine-grained
control over the execution order of the asynchronous code and the cleanup code.
React relies on the returned cleanup function to handle cleanup when the
component is unmounted or when the dependencies specified in the useEffect
dependency array change



