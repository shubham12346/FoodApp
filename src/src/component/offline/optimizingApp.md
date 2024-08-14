# How to optimize app

1. Chunking ,
2. Code Splitting
3. Dynamic
4. Lazy Loading
5. dynamic loading
   -Bundling to break down whole app into smaller chunks

- when our app grows its bundle size will also grow and it make our app slow to load on the browser as our bundle size is increased to solve this issue what we do is we split the code , we split our js bundle so only required js files are bundled when we display it
  for the code splitting for any bundlers like webpack , parcel and many more we can use a
  built in function given react called as lazy

- react lazy helps us for dynamic loading of our component , dynamic loading of new routes
- For the time the component loaded by react , we can a show loader or any fallback component and
  for this we have react suspense below is an example of dynamic loading of an component

```
import {lazy} from "react"

cost MyComponent = lazy(()=> import ("path"));

<Routes>
  <Route to "/" component = {<suspense fallback={<h1> loading <h1/>}> <MyComponent /></suspense>}>
</Routes>

```

# When and why do we need lazy()?

we use lazy in react for chunking or code splitting to reduce the size of file . After using
lazy we only load the files which we need to render on the ui .

# Advantages of code splitting

Performance Optimization

1. Route-based Code Splitting
2. Component-based Code Splitting

# Reference

https://legacy.reactjs.org/docs/code-splitting.html

# when adn why we use suspense

Suspense in React is a feature that allows you to handle the loading states of asynchronous operations in a declarative way. Here's a breakdown of when and why you might need to use Suspense in React web development:

### When to Use Suspense

1. **Fetching Data**:
   - When you need to fetch data from an API and render a component only after the data has been loaded.
2. **Code Splitting**:

   - When you are using dynamic imports to load components lazily, and you want to show a loading indicator while the component is being loaded.

3. **Concurrent Rendering**:
   - When you want to make your application more responsive by allowing React to work on multiple tasks simultaneously. Suspense can help coordinate which parts of the UI should be shown while others are still being prepared.

### Why Use Suspense

1. **Improved User Experience**:
   - Suspense provides a built-in way to show loading states, making your app feel smoother and more responsive to users.
2. **Declarative Data Fetching**:

   - Instead of managing loading states and errors imperatively, Suspense allows you to declare what should happen while your component is waiting for data or code to load, leading to cleaner and more maintainable code.

3. **Simplified Code**:
   - Suspense abstracts away the complexity of handling loading states, reducing the amount of boilerplate code you need to write.

### Example Usage

#### Basic Suspense with Data Fetching

```jsx
import React, { Suspense } from "react";

// Assume fetchData is a function that returns a promise
const DataComponent = React.lazy(() => import("./DataComponent"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <DataComponent />
      </Suspense>
    </div>
  );
}

export default App;
```
