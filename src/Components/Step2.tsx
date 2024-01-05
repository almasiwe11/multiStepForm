import StepInfo from "./StepInfo"
import StepStyle from "./StepStyle"
import { plans } from "../Data/Plans"
import arcade from "/icon-arcade.svg"
import advanced from "/icon-advanced.svg"
import pro from "/icon-pro.svg"
import { useState } from "react"
import Plan from "./Plan"
import Toggler from "./Toggler"
import { useDispatch } from "react-redux"
import { chosePlan } from "../Slices/FormSlice"

function Step2() {
  const dispatch = useDispatch()
  const [currentPlan, setCurrentPlan] = useState(0)
  const [yearly, setYearly] = useState(false)

  function handleNext() {
    dispatch(chosePlan({ yearly: yearly, plan: plans[currentPlan] }))
  }

  return (
    <form id="step2" onSubmit={handleNext} action="">
      <StepStyle>
        <StepInfo
          name="Select your plan"
          detail="You have the option of monthly or yearly billing."
        />
        <div className="flex flex-col lg:flex-row gap-3 mt-10">
          <Plan
            onClick={() => setCurrentPlan(0)}
            image={arcade}
            name="Arcade"
            altImage="arcade image"
            yearly={yearly}
            price={9}
            currentPlan={currentPlan}
          />
          <Plan
            image={advanced}
            name="Advanced"
            altImage="advanced image"
            price={12}
            yearly={yearly}
            onClick={() => setCurrentPlan(1)}
            currentPlan={currentPlan}
          />
          <Plan
            image={pro}
            name="Pro"
            altImage="pro image"
            price={15}
            yearly={yearly}
            onClick={() => setCurrentPlan(2)}
            currentPlan={currentPlan}
          />
        </div>

        <div className="text-denim flex mt-12 gap-4 justify-center">
          <div
            className={`${
              yearly ? "text-gray-300" : "text-denim font-bold"
            } duration-300 ease-in-out`}
          >
            Monthly
          </div>
          <Toggler yearly={yearly} setYearly={setYearly} />
          <div
            className={`${
              !yearly ? "text-gray-300" : "text-denim font-bold"
            } duration-300 ease-in-out`}
          >
            Yearly
          </div>
        </div>
      </StepStyle>
    </form>
  )
}

export default Step2
