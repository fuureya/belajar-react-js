
function Button(props) {
  const { warna = 'bg-black', children = 'Kosong!' } = props
  return (
    <button className={`h-10 px-6 mx-1 font-semibold rounded-md ${props.warna} text-white`} type='submit'>
      {props.children}
    </button>
  )
}

function App() {

  return (
    <div className='flex justify-center bg-blue-600 min-h-screen items-center'>
      <Button warna="bg-red-700">Tombol Merah</Button>
      <Button warna="bg-blue-300">Tombol Biru</Button>
      <Button warna="bg-green-500">Tombol Hijau</Button>
      <Button />
    </div>
  )
}

export default App
