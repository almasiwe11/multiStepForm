import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { RootState } from "../RootState"
import StepStyle from "./StepStyle"
import StepInfo from "./StepInfo"
import Summary from "./Summary"

function Step4() {
  const navigate = useNavigate()
  const { step } = useSelector((state: RootState) => state.form)
  useEffect(() => {
    if (step === 1) {
      navigate(`/step${step}`)
    }
  }, [step, navigate])

  return (
    <StepStyle>
      <StepInfo
        name="Finishing up"
        detail="Double-check everything looks OK before confirming."
      />
      <Summary />
    </StepStyle>
  )
}

export default Step4
