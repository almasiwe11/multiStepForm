import { useState } from "react"

type Props = {
  yearly: boolean
  setYearly: React.Dispatch<React.SetStateAction<boolean>>
}

const Toggler = ({ yearly, setYearly }: Props) => {
  function onToggle() {
    setYearly((prev) => !prev)
  }

  return (
    <div
      onClick={onToggle}
      className="h-7 rounded-full w-12 cursor-pointer bg-denim p-1"
    >
      <div
        className={`bg-white rounded-full w-5 h-5 duration-300 esae-in-out ${
          yearly ? "translate-x-[100%]" : "translate-x-[0%]"
        }`}
      ></div>
    </div>
  )
}

export default Toggler
