import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../RootState"
import { useNavigate } from "react-router"
import { changeStep, finished } from "../Slices/FormSlice"

function Summary() {
  const { plan, addOns, yearly } = useSelector((state: RootState) => state.form)
  const total = plan.priceMonth + calcTotalAddons()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function calcTotalAddons(): number {
    return addOns.reduce((acc, each) => {
      return acc + each.priceMonth
    }, 0)
  }

  function hanldeSubmit(e: React.MouseEvent<HTMLFormElement, MouseEvent>) {
    e.preventDefault()
    dispatch(finished())
  }

  return (
    <div className="flex flex-col gap-5 mt-5">
      <form id="step4" onSubmit={hanldeSubmit}></form>
      <div className="bg-bg rounded-lg">
        <div className="flex flex-col p-3 mt-6">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-lg font-bold">
                {plan.name}({yearly ? "Yearly" : "Monthly"})
              </span>
              <span
                onClick={() => {
                  dispatch(changeStep(2))
                  navigate("/step2")
                }}
                className="underline text-gray-400 cursor-pointer hover:text-denim duration-150 ease-in-out"
              >
                Change
              </span>
            </div>

            <span className="font-bold text-denim">
              ${plan.priceMonth}/{yearly ? "yr" : "mo"}
            </span>
          </div>
          <hr className="border-zinc-400 w-full my-3"></hr>

          <div className="flex flex-col gap-2.5">
            {addOns.map((add) => (
              <div key={add.name} className="flex justify-between">
                <span>{add.name}</span>
                <span>
                  ${add.priceMonth}/{yearly ? "yr" : "mo"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span>Total ({yearly ? "per year" : "per month"})</span>
        <span className="text-purple font-bold text-lg">
          +${total}/{yearly ? "yr" : "mo"}
        </span>
      </div>
    </div>
  )
}

export default Summary
