import StepInfo from "./StepInfo"
import StepStyle from "./StepStyle"

function Step1() {
  const inputStyle = `border border-border rounded-xl p-2 px-3`
  return (
    <StepStyle>
      <StepInfo
        name="Personal Info"
        detail="Please provide your name, email address, and phone number."
      />
      <div className="flex flex-col gap-5">
        <div className="mt-10 flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className={inputStyle}
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className=" flex flex-col gap-2">
          <label htmlFor="name">Email Address</label>
          <input
            type="text"
            name="name"
            className={inputStyle}
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className=" flex flex-col gap-2">
          <label htmlFor="name">Phone Number</label>
          <input
            type="text"
            name="name"
            className={inputStyle}
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </div>
    </StepStyle>
  )
}

export default Step1
