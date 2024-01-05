import { useSelector } from "react-redux"
import { RootState } from "../RootState"
import { Step } from "../Types/Types"

type Props = {
  step: Step
}

function Stepp({ step }: Props) {
  const { step: stepState } = useSelector((state: RootState) => state.form)
  return (
    <div className="flex items-center gap-4">
      <div
        className={`${
          stepState === step.stepNumber
            ? "bg-gray-200 text-denim"
            : "text-white"
        } h-9 w-9 border border-white rounded-full flex-center`}
      >
        {step.stepNumber}
      </div>

      <div className=" flex-col uppercase hidden lg:flex text-white">
        <p className="text-xs">step {step.stepNumber}</p>
        <p className="font-bold">{step.stepName}</p>
      </div>
    </div>
  )
}

export default Stepp
