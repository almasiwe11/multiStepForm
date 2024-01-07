import StepStyle from "./StepStyle"
import thank from "/icon-thank-you.svg"

function Step5() {
  return (
    <StepStyle>
      <div className="flex-center h-full flex-col gap-5">
        <img src={thank} alt="checkmark" />
        <h1 className="text-denim text-4xl font-bold">Thank you!</h1>
        <p className="text-gray-400 text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </StepStyle>
  )
}

export default Step5
