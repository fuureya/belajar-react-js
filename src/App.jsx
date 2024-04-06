import InputForm from "./Components/Elements/Input/Index";
import Button from "./Components/Elements/Button/Index";

function App() {
  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl font-bold mb-2 ">Login</h1>
        <p className="font-medium text-slate-500">
          Welcome, Please Enter Your Details!
        </p>
        <form action="">

          <InputForm text="email" type="email" id="email" placeholder="Masukkan Email" />

          {/* <div className="mb-6">
            <label htmlFor="" className="block text-slate-700 text-sm font-bold mb-2">Password </label>
            <input type="Password" className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity:50" placeholder="Secret Password!" />
          </div> */}

          <Button variant="bg-blue-600 w-full">Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default App
