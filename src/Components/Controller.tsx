import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../RootState"
import { useNavigate } from "react-router"
import { stepDone } from "../Slices/FormSlice"
import { useEffect } from "react"

function Controller() {
  const { step, next } = useSelector((state: RootState) => state.form)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let form = "step1"
  if (step === 2) form = "step2"

  function handleNext() {
    if (!next) return
    console.log("wtff")
    navigate(`/step${step}`)
    dispatch(stepDone())
  }

  useEffect(() => {
    if (next) handleNext()
  }, [next])

  return (
    <div className="flex py-6 lg:py-3 justify-between items-center px-7 bg-white">
      <a href="">Go Back</a>
      <button
        type="submit"
        form={"form"}
        className="bg-denim text-white flex-center p-2.5 px-5 rounded-lg"
      >
        Next Step
      </button>
    </div>
  )
}

export default Controller
