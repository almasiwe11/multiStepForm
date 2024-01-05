import { useForm } from "react-hook-form"
import StepInfo from "./StepInfo"
import StepStyle from "./StepStyle"
import { zodResolver } from "@hookform/resolvers/zod"
import { TpersonalInfo, personalInfo } from "../Types/Types"
import { useDispatch } from "react-redux"
import { collectPersonalInfo, nextStep } from "../Slices/FormSlice"

function Step1() {
  const dispatch = useDispatch()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TpersonalInfo>({
    resolver: zodResolver(personalInfo),
  })

  /*   function onSubmit(data: TpersonalInfo) {
    dispatch(nextStep())
    dispatch(collectPersonalInfo(data))
    reset()
  } */

  const inputStyle = `border border-border rounded-xl p-2 px-3`

  return (
    <StepStyle>
      <StepInfo
        name="Personal Info"
        detail="Please provide your name, email address, and phone number."
      />

      <form className="flex flex-col gap-5">
        <div className="mt-10 flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            {...register("name")}
            type="text"
            name="name"
            className={`${inputStyle} ${
              errors.name && `${errors.name.message}`
            }`}
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className=" flex flex-col gap-2">
          <label htmlFor="name">Email Address</label>
          <input
            {...register("email")}
            type="text"
            name="email"
            className={`${inputStyle} ${
              errors.email && `${errors.email.message}`
            }`}
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className=" flex flex-col gap-2">
          <label htmlFor="name">Phone Number</label>
          <input
            {...register("phone")}
            type="text"
            name="phone"
            className={`${inputStyle} ${
              errors.phone && `${errors.phone.message}`
            }`}
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </form>
    </StepStyle>
  )
}

export default Step1
