import StepInfo from "./StepInfo"
import StepStyle from "./StepStyle"
import { RootState } from "../RootState"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import Addon from "./Addon"
import { addons as dataAddons } from "../Data/Addons"
import { TAddon } from "../Types/Types"
import { choseAddons, nextStep } from "../Slices/FormSlice"
import useRestart from "../Hooks/useRestart"

function Step3() {
  useRestart()
  const dispatch = useDispatch()
  const { addOns: reduxAddons } = useSelector((state: RootState) => state.form)
  const [addOns, setAddons] = useState<TAddon[]>(reduxAddons)

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
