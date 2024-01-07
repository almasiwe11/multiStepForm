import { useEffect } from "react"
import StepStyle from "./StepStyle"
import thank from "/icon-thank-you.svg"
import { useSelector } from "react-redux"
import { RootState } from "../RootState"
import { useNavigate } from "react-router"

function Step5() {
  const navigate = useNavigate()
  const { step } = useSelector((state: RootState) => state.form)
  /* useEffect(() => {
    if (step !== 5) {
      navigate(`/step${step}`)
    }
  }, [step, navigate]) */

  return (
    <div className="flex-center h-full">
      <StepStyle>
        <div className="flex flex-col gap-5 items-center">
          <img src={thank} alt="checkmark" />
          <h1 className="text-denim text-4xl font-bold">Thank you!</h1>
          <p className="text-gray-400 text-center">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </StepStyle>
    </div>
  )
}

export default Step5
