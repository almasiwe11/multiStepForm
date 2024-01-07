import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { RootState } from "../RootState"
import { useEffect } from "react"

function useRestart() {
  const navigate = useNavigate()
  const { step } = useSelector((state: RootState) => state.form)
  useEffect(() => {
    if (step === 1) {
      navigate(`/step${step}`)
    }
  }, [step, navigate])

  function restart() {
    console.log("Restarting...")
  }

  return { restart }
}

export default useRestart
