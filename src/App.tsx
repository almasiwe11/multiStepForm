import Sidebar from "./Components/Sidebar"
import Step1 from "./Components/Step1"
import Controller from "./Components/Controller"

function App() {
  return (
    <div className="h-screen lg:w-screen bg-bg lg:flex items-center justify-center">
      <div className="lg:p-3 h-full lg:h-auto text-denim bg-bg lg:bg-white flex flex-col lg:flex-row shadow-lg rounded-xl items-stretch">
        <Sidebar />
        <div className="lg:px-20 flex flex-col justify-between h-full lg:h-[568px]">
          <Step1 />
          <Controller />
        </div>
      </div>
    </div>
  )
}

export default App
