import { Plus } from 'lucide-react'
import './index.css'

function App() {

  return (
    <>
    <header className='w-full bg-red-800 h-44'>
    </header>

    <div className='w-56 h-14 ml-64 -mt-32 flex items-center gap-2'>
      <img src="bowl.svg" alt="" />
      <div>
        <span className='text-white text-2xl font-semibold'>GoRestaurant</span>
        <p className='text-pink-300'>Comida italiana, sim.</p>
      </div>
    </div>

    <div className='w-48 h-14 justify-end ml-auto mr-16 -mt-14  '>
      <button className='bg-lime-500 px-4 py-3 rounded-lg flex items-center text-white font-semibold gap-2'  >Novo Prato <Plus  /> </button>
    </div >
     
    </>
  )
}

export default App
