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

  function onSubmit(data: TpersonalInfo) {
    dispatch(collectPersonalInfo(data))
    reset()
  }

  const inputStyle = `border border-border rounded-xl p-2 px-3`

  return (
    <StepStyle>
      <StepInfo
        name="Personal Info"
        detail="Please provide your name, email address, and phone number."
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        id="step1"
        className="flex flex-col gap-5"
      >
        <div className="mt-10 flex flex-col gap-2">
          <div className="flex justify-between">
            <label htmlFor="name">Name</label>
            <p className="text-red-500 font-bold">
              {errors.name && `${errors.name.message}`}
            </p>
          </div>
          <input
            {...register("name")}
            type="text"
            name="name"
            className={`${inputStyle} ${
              errors.name && `border border-red-400`
            }`}
            placeholder="e.g. Stephen King"
          />
        </div>

        <div className=" flex flex-col gap-2">
          <div className="flex justify-between">
            <label htmlFor="email">Email</label>
            <p className="text-red-500 font-bold">
              {errors.email && `${errors.email.message}`}
            </p>
          </div>
          <input
            {...register("email")}
            type="text"
            name="email"
            className={`${inputStyle}  ${
              errors.email && `border border-red-400`
            }`}
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex justify-between">
            <label htmlFor="phone">Phone</label>
            <p className="text-red-500 font-bold">
              {errors.phone && `${errors.phone.message}`}
            </p>
          </div>
          <input
            {...register("phone")}
            type="text"
            name="phone"
            className={`${inputStyle}  ${
              errors.phone && `border border-red-400`
            }`}
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </form>
    </StepStyle>
  )
}

export default Step1
