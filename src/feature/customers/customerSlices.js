const customerInitialState = {
  fullname: "",
  nationalID: "",
  createAt: "",
};

export default function customerReducer(state = customerInitialState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullname: action.payload.fullname,
        nationalID: action.payload.nationalID,
        createAt: action.payload.createAt,
      };

    case "customer/changeName":
      return { ...state, fullname: action.payload };
    default:
      return state;
  }
}

export function createCustomer(fullname, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullname: fullname,
      nationalID: nationalID,
      createAt: new Date().toISOString(),
    },
  };
}

export function changeName(fullname) {
  return { type: "customer/changeName", payload: fullname };
}
