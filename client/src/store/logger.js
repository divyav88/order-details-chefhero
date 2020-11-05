//action logging
export const logger = (store) => (next) => (action) => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  console.log(
    `${today.toISOString()}: Dispatching... ${JSON.stringify(action)}`
  );
  let result = next(action);
  return result;
};

//error handling
export const crashReporter = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (err) {
    console.log(
      `${Date.now()}: Error logged: ${err} | action: ${action} | state: ${store.getState()}`
    );
  }
};
