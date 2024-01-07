import { useState } from "react"
import { AddonData, TAddon } from "../Types/Types"
import { useSelector } from "react-redux"
import { RootState } from "../RootState"

type Props = {
  addon: AddonData
  setAddons: React.Dispatch<React.SetStateAction<TAddon[]>>
  reduxChecked: boolean
}

function Addon({ addon, setAddons, reduxChecked }: Props) {
  const [checked, setChecked] = useState(reduxChecked)
  const { yearly } = useSelector((state: RootState) => state.form)

  function handleClick() {
    setChecked((prev) => !prev)
    if (!checked) {
      setAddons((prev) => [
        ...prev,
        {
          name: addon.name,
          priceMonth: !yearly ? addon.priceMonth : addon.priceMonth * 10,
        },
      ])
    } else {
      setAddons((prev) => prev.filter((add) => add.name !== addon.name))
    }
  }

  return (
    <div className="border border-border rounded-xl p-2 px-4 flex items-center gap-4">
      <input
        checked={checked}
        onClick={handleClick}
        type="checkbox"
        id="myCheckbox"
        className="form-checkbox h-5 w-5 accent-indigo-600 transition cursor-pointer duration-150 ease-in-out"
      />
      <div className="flex flex-col gap-1">
        <span className="font-bold text-lg">{addon.name}</span>
        <span className="text-gray-400">{addon.detail}</span>
      </div>
      <div className="text-denim ml-auto">
        +${yearly ? addon.priceMonth * 10 : addon.priceMonth}/
        {yearly ? "yr" : "mo"}
      </div>
    </div>
  )
}

export default Addon
