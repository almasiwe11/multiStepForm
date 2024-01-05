import Sidebar from "./Components/Sidebar"
import Step1 from "./Components/Step1"
import Controller from "./Components/Controller"
import { useSelector } from "react-redux"
import { RootState } from "./RootState"
import Step2 from "./Components/Step2"
import Step3 from "./Components/Step3"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen lg:w-screen bg-bg lg:flex items-center justify-center">
        <div className="max-w-[940px] w-full lg:p-3 h-full lg:h-auto text-denim bg-bg lg:bg-white flex flex-col lg:flex-row shadow-lg rounded-xl">
          <Sidebar />
          <div className="lg:px-20 flex w-full flex-col justify-between h-full lg:h-[568px] ">
            <Routes>
              <Route index element={<Step1 />} />
              <Route path="step2" element={<Step2 />} />
              <Route path="step3" element={<Step3 />} />
            </Routes>
            <Controller />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
