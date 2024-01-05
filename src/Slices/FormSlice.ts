import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { initialState, TpersonalInfo } from "../Types/Types"

const initialState: initialState = {
  step: 1,
  plan: {
    name: "arcade",
    priceMonth: 9,
  },
  yearly: false,
  personalInfo: {
    name: "",
    email: "",
    phone: "",
  },
  addOns: [
    {
      name: "Online Service",
      priceMonth: 1,
      included: false,
    },
    {
      name: "Larger Storage",
      priceMonth: 2,
      included: false,
    },
    {
      name: "Cuztomizable Profile",
      priceMonth: 2,
      included: false,
    },
  ],
}

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    nextStep(state) {
      return { ...state }
    },

    collectPersonalInfo(state, action: PayloadAction<TpersonalInfo>) {
      state.personalInfo = action.payload
    },
  },
})

export const { nextStep, collectPersonalInfo } = formSlice.actions
export default formSlice.reducer
