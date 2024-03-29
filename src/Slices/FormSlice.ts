import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { initialState, TpersonalInfo } from "../Types/Types"

const initialState: initialState = {
  next: false,
  step: 1,
  plan: {
    name: "Arcade",
    priceMonth: 9,
  },
  yearly: false,
  personalInfo: {
    name: "",
    email: "",
    phone: "",
  },
  addOns: [],
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
    choseAddons(state, action) {
      state.addOns = action.payload
      state.step = state.step + 1
    },
    changeStep(state, action) {
      state.step = action.payload
    },
    changePriceToggle(state, action) {
      if (state.addOns.length === 0) return state

      if (action.payload === "yearly") {
        state.addOns = state.addOns.map((add) => ({
          ...add,
          priceMonth: add.priceMonth * 10,
        }))
      } else if (action.payload === "monthly") {
        state.addOns = state.addOns.map((add) => ({
          ...add,
          priceMonth: add.priceMonth / 10,
        }))
      }
    },

    finished(state) {
      state.next = true
      state.step = state.step + 1
    },
  },
})

export const {
  nextStep,
  collectPersonalInfo,
  choseAddons,
  chosePlan,
  prevStep,
  stepDone,
  changeStep,
  changePriceToggle,
  finished,
} = formSlice.actions
export default formSlice.reducer
