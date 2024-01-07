import { useNavigate } from "react-router"
import StepInfo from "./StepInfo"
import StepStyle from "./StepStyle"
import { RootState } from "../RootState"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import Addon from "./Addon"
import { addons as dataAddons } from "../Data/Addons"
import { TAddon } from "../Types/Types"
import { choseAddons, nextStep } from "../Slices/FormSlice"

function Step3() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { step, addOns: reduxAddons } = useSelector(
    (state: RootState) => state.form
  )
  const [addOns, setAddons] = useState<TAddon[]>(reduxAddons)

  /*   useEffect(() => {
    if (step !== 3) {
      navigate(`/step${step}`)
    }
  }, [step, navigate]) */

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch(choseAddons(addOns))
    dispatch(nextStep())
  }

  return (
    <StepStyle>
      <StepInfo
        name="Pick add-ons"
        detail="Add-ons help enhance your gaming experience."
      />
      <form id="step3" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 mt-8">
          {dataAddons.map((bonus) => (
            <Addon
              reduxChecked={reduxAddons.some((add) => add.name === bonus.name)}
              key={bonus.name}
              addon={bonus}
              setAddons={setAddons}
            />
          ))}
        </div>
      </form>
    </StepStyle>
  )
}

export default Step3
