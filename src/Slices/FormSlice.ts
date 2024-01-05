import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { initialState, TpersonalInfo } from "../Types/Types"

const initialState: initialState = {
  next: false,
  step: 2,
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
      state.next = true
    },

    prevStep(state) {
      state.step = state.step - 1
      state.next = false
    },

    collectPersonalInfo(state, action: PayloadAction<TpersonalInfo>) {
      state.personalInfo = action.payload
      state.step = state.step + 1
      state.next = true
    },

    chosePlan(state, action) {
      state.yearly = action.payload.yearly
      state.plan = action.payload.plan
      state.step = state.step + 1
      state.next = true
    },

    stepDone(state) {
      state.next = false
    },
  },
})

export const { nextStep, collectPersonalInfo, chosePlan, prevStep, stepDone } =
  formSlice.actions
export default formSlice.reducer
