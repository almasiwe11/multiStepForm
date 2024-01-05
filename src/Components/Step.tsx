import { Step } from "../Types/Types"

type Props = {
  step: Step
  fill: boolean
}

function Stepp({ step, fill }: Props) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`${
          fill ? "bg-gray-200 text-denim" : "text-white"
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
