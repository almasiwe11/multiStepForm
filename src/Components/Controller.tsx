import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../RootState"
import { nextStep, prevStep } from "../Slices/FormSlice"

function Controller() {
  const { step } = useSelector((state: RootState) => state.form)
  const dispatch = useDispatch()

  function handleNext() {
    if (step === 2) {
      dispatch(nextStep())
    }
  }

  function handleBack() {
    if (step === 1) return
    dispatch(prevStep())
  }

  return (
    <div className="flex py-6 lg:py-3 justify-between items-center px-7 bg-white">
      <a href="" onClick={handleBack}>
        Go Back
      </a>
      <button
        type="submit"
        onClick={handleNext}
        form={`${step === 1 && "personal-info"}`}
        className="bg-denim text-white flex-center p-2.5 px-5 rounded-lg"
      >
        Next Step
      </button>
    </div>
  )
}

export default Controller
