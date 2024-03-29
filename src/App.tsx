import Sidebar from "./Components/Sidebar"
import Step1 from "./Components/Step1"
import Controller from "./Components/Controller"
import Step2 from "./Components/Step2"
import Step3 from "./Components/Step3"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Step4 from "./Components/Step4"
import Step5 from "./Components/Step5"

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen relative lg:w-screen bg-bg lg:flex items-center justify-center">
        <div className="max-w-[940px] w-full lg:p-3 h-full lg:h-auto text-denim bg-bg lg:bg-white flex flex-col lg:flex-row shadow-lg rounded-xl">
          <Sidebar />
          <div className="lg:px-20 flex w-full flex-col justify-between h-full lg:h-[568px] ">
            <Routes>
              <Route index path="step1" element={<Step1 />} />
              <Route path="step2" element={<Step2 />} />
              <Route path="step3" element={<Step3 />} />
              <Route path="step4" element={<Step4 />} />
              <Route path="step5" element={<Step5 />} />
              <Route path="*" element={<Navigate to="/step1" />} />
            </Routes>
            <Controller />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
