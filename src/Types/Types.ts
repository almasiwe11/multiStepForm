import { z } from "zod"

const personalInfo = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().refine((value) => /^\+\d{1,3}-\d{1,14}$/.test(value), {
    message:
      "Invalid phone number format. Please use the format: +1-1234567890",
  }),
})
type TpersonalInfo = z.infer<typeof personalInfo>

type Step = {
  stepNumber: number
  stepName: string
}

type initialState = {
  step: number
  plan: "arcade" | "advanced" | "pro"
  yearly: boolean
  personalInfo: TpersonalInfo
  addOns: Addon[]
}

type Addon = {
  name: string
  priceMonth: number
  included: boolean
}

export { personalInfo }
export type { Step, initialState, TpersonalInfo }
