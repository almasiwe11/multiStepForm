import StepInfo from "./StepInfo"
import StepStyle from "./StepStyle"
import { plans } from "../Data/Plans"
import arcade from "/icon-arcade.svg"
import advanced from "/icon-advanced.svg"
import pro from "/icon-pro.svg"
import { useState } from "react"
import Plan from "./Plan"
import Toggler from "./Toggler"
import { useDispatch, useSelector } from "react-redux"
import { changePriceToggle, chosePlan } from "../Slices/FormSlice"
import { RootState } from "../RootState"
import useRestart from "../Hooks/useRestart"

function Step2() {
  useRestart()
  const dispatch = useDispatch()
  const { yearly: reduxYearly, plan } = useSelector(
    (state: RootState) => state.form
  )
  const reduxPlan = plans.findIndex((basePlan) => basePlan.name === plan.name)
  const [currentPlan, setCurrentPlan] = useState(reduxPlan)
  const [yearly, setYearly] = useState(reduxYearly)

  function handleNext(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch(chosePlan({ yearly: yearly, plan: plans[currentPlan] }))
  }

  function hanldeToggle() {
    yearly
      ? dispatch(changePriceToggle("monthly"))
      : dispatch(changePriceToggle("yearly"))
  }

  return (
    <StepStyle>
      <StepInfo
        name="Select your plan"
        detail="You have the option of monthly or yearly billing."
      />
      <div className="flex flex-col lg:flex-row gap-3 mt-10">
        <form id="step2" onSubmit={handleNext}></form>

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
        <Toggler onClick={hanldeToggle} yearly={yearly} setYearly={setYearly} />
        <div
          className={`${
            !yearly ? "text-gray-300" : "text-denim font-bold"
          } duration-300 ease-in-out`}
        >
          Yearly
        </div>
      </div>
    </StepStyle>
  )
}

export default Step2
