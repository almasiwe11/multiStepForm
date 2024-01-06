import { useNavigate } from "react-router"
import StepInfo from "./StepInfo"
import StepStyle from "./StepStyle"
import { RootState } from "../RootState"
import { useSelector } from "react-redux"
import { useEffect } from "react"

function Step3() {
  const navigate = useNavigate()
  const { step } = useSelector((state: RootState) => state.form)

  useEffect(() => {
    if (step !== 3) {
      navigate(`/step${step}`)
    }
  }, [step, navigate])

  return (
    <StepStyle>
      <StepInfo
        name="Pick add-ons"
        detail="Add-ons help enhance your gaming experience."
      />
    </StepStyle>
  )
}

export default Step3
