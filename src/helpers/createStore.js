exports.__esModule = true;
exports.default = createStore;

function createStore(reducer, initialState) {
  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  let currentReducer = reducer;
  let currentState = initialState;
  const listeners = [];
  let isDispatching = false;

  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    listeners.push(listener);

    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  function dispatch(action) {
    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    listeners.slice().forEach(function(listener) {
      return listener();
    } );
    return action;
  }

  function replaceReducer(nextReducer) {
    currentReducer = nextReducer;
  }

  return {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
  };
}

/*****************
 ** WEBPACK FOOTER
 ** ./~/redux/lib/createStore.js
 ** module id = 111
 ** module chunks = 0
 **/
