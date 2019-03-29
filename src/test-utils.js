// Common test utilities 


export default { 
  // All actions should follow the same structure
  // { payload: ..., type: ...}
  action: (payload, type) => {
    return { "payload": payload, type };
  },
  callReducer: (reducers, payload = {
    type, state, data
  }) => reducers.default[payload.type](payload.state, payload.data)
}