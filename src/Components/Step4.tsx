import StepStyle from "./StepStyle"
import StepInfo from "./StepInfo"
import Summary from "./Summary"
import useRestart from "../Hooks/useRestart"

function Step4() {
  useRestart()

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
