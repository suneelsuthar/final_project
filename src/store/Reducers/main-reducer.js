const INITIAL_STATE = {
  item: []
}


const Mainreducer = (state = INITIAL_STATE, action) => {
  switch (action) {
    case "addData":
      state.item.push(action.payload.item)
      return { ...state, item: this.state.item }


    default :return state
  }
}

export default Mainreducer