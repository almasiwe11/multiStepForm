type Props = {
  name: string
  detail: string
}

function StepInfo({ name, detail }: Props) {
  return (
    <div className="flex flex-col gap-3 ">
      <h1 className="text-3xl font-bold">{name}</h1>
      <p>{detail}</p>
    </div>
  )
}

export default StepInfo
