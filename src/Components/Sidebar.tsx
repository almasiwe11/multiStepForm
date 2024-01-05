import Step from "./Step"

function Sidebar() {
  const steps = [
    { stepNumber: 1, stepName: "your info" },
    { stepNumber: 2, stepName: "select plan" },
    { stepNumber: 3, stepName: "add ons" },
    { stepNumber: 4, stepName: "summary" },
  ]
  return (
    <div className="lg:rounded-xl bg-sidebar-mobile h-[230px] px-10 lg:h-[568px] lg:bg-sidebar-desktop lg:w-[274px]  bg-no-repeat bg-cover">
      <div className="py-8 flex gap-5 lg:flex-col justify-center">
        {steps.map((step) => (
          <Step fill step={step} key={step.stepNumber} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
