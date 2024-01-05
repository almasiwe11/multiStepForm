import { plans } from "../Data/Plans"

type Props = {
  image: string
  altImage: string
  name: string
  price: number
  yearly: boolean
  onClick: () => void
  currentPlan: number
}

function Plan({
  image,
  altImage,
  name,
  yearly,
  price,
  onClick,
  currentPlan,
}: Props) {
  return (
    <div
      className={`${
        plans[currentPlan].name === name ? "border-denim" : "border-border"
      } select-none rounded-xl cursor-pointer  flex flex-row lg:flex-col p-4 w-full lg:gap-6 gap-3 border hover:border-denim`}
      onClick={onClick}
    >
      <div>
        <img src={image} alt={altImage} />
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold">{name}</h1>
        <p>
          ${yearly ? price * 10 : price}/{yearly ? "yr" : "mo"}
        </p>
      </div>
    </div>
  )
}

export default Plan
