import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../RootState"
import { useNavigate } from "react-router"
import { prevStep, stepDone } from "../Slices/FormSlice"
import { useEffect } from "react"

function Controller() {
  const { step, next } = useSelector((state: RootState) => state.form)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let form = "step1"
  if (step === 2) form = "step2"
  if (step === 3) form = "step3"
  if (step === 4) form = "step4"

  console.log(form)

  function handleNext() {
    if (!next) return
    navigate(`/step${step}`)
    dispatch(stepDone())
  }

  function handleBack() {
    if (step === 1) return
    dispatch(prevStep())
    navigate(`/step${step - 1}`)
  }

  useEffect(() => {
    if (next) handleNext()
  }, [next])

  if (step === 5) return

  return (
    <div className="flex py-6 absolute bottom-0 lg:static w-full lg:w-auto lg:py-3 justify-between items-center px-7 bg-white">
      <a onClick={handleBack} className="cursor-pointer">
        {step > 1 && "Go Back"}
      </a>
      <button
        type="submit"
        form={form}
        className="bg-denim text-white flex-center p-2.5 px-5 rounded-lg"
      >
        Next Step
      </button>
    </div>
  )
}

export default Controller
