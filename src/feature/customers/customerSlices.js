import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullname: "",
  nationalID: "",
  createAt: "",
};

const customerSlices = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullname, nationalID) {
        return {
          payload: { fullname, nationalID, createAt: new Date().toISOString() },
        };
      },
      reducer(state, action) {
        state.fullname = action.payload.fullname;
        state.nationalID = action.payload.nationalID;
        state.createAt = action.payload.createAt;
      },
      changeName(state, action) {
        state.fullname = action.payload;
      },
    },
  },
});

export const { createCustomer, changeName } = customerSlices.actions;

export default customerSlices.reducer;

// export default function customerReducer(state = customerInitialState, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullname: action.payload.fullname,
//         nationalID: action.payload.nationalID,
//         createAt: action.payload.createAt,
//       };

//     case "customer/changeName":
//       return { ...state, fullname: action.payload };
//     default:
//       return state;
//   }
// }

// export function createCustomer(fullname, nationalID) {
//   return {
//     type: "customer/createCustomer",
//     payload: {
//       fullname: fullname,
//       nationalID: nationalID,
//       createAt: new Date().toISOString(),
//     },
//   };
// }

// export function changeName(fullname) {
//   return { type: "customer/changeName", payload: fullname };
// }
