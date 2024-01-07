import React from "react"

type Props = {
  children: React.ReactNode
}

function StepStyle({ children }: Props) {
  return (
    <div className="shadow-xl mx-6 p-7 pt-7 lg:pt-12 lg:mx-0 rounded-xl py-10 relative -top-10 lg:top-0 z-50 bg-white lg:shadow-none">
      {children}
    </div>
  )
}

export default StepStyle
