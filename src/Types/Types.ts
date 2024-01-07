import { z } from "zod"

const personalInfo = z.object({
  name: z.string().min(1, "name is required"),
  email: z.string().min(1, "email is required").email(),
  phone: z
    .string()
    .min(1, "phone is required")
    .refine((value) => /^\+\d{1,3}-\d{1,14}$/.test(value), {
      message: "Please use the format: +1-1234567890",
    }),
})
type TpersonalInfo = z.infer<typeof personalInfo>

type Step = {
  stepNumber: number
  stepName: string
}

type initialState = {
  next: boolean
  step: number
  plan: Plan
  yearly: boolean
  personalInfo: TpersonalInfo
  addOns: TAddon[]
}

type Plan = {
  name: string
  priceMonth: number
}

type TAddon = {
  name: string
  priceMonth: number
}

type AddonData = TAddon & {
  detail: string
}

export { personalInfo }
export type { Step, initialState, TpersonalInfo, Plan, AddonData, TAddon }
