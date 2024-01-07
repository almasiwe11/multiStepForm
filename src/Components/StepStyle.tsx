import React from "react"

type Props = {
  children: React.ReactNode
}

function StepStyle({ children }: Props) {
  return (
    <div className="flex-center lg:block">
      <div className="shadow-xl  p-7 pt-7 w-[90%] mx-auto lg:w-auto lg:pt-12 lg:mx-0 rounded-xl py-10 absolute lg:static top-24 lg:top-0 z-50 bg-white lg:shadow-none">
        {children}
      </div>
    </div>
  )
}

export default StepStyle
