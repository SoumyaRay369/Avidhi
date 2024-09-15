import { Heading } from './components/Heading'
import {Aim} from './components/Aim'
import {Background} from './components/Background'
function App() {


  return (
    <>
      <div className='h-screen overflow-y-auto bg-black'>
      <Heading></Heading>
      <Background></Background>
      <Aim></Aim>
      </div>
  

    </>
  )
}

export default App
