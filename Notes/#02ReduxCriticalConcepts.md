## Redux Terminology

- store
- reducer
- actions
- dispatch
- listeners
- middleware

#### store

- its a data store
- its plain immutable javascript object

### reducer

- its a pure function
- it takes two arguments
  - current state
  - action
- it returns a new state
- it should not mutate the current state

### actions

- its a plain javascript object
- it send data from the application to the store

### dispatch

- its a function that is used to send actions to the store
- it takes an action as an argument
- it returns the new state of the store

### listeners

- its a function that is called when the state changes
- it is used to update the UI when the state changes

### middleware

- its a function that is used to intercept actions before they reach the reducer
- it can be used to log actions, handle async actions, etc.
