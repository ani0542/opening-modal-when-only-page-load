import React from 'react'
import { Button } from 'semantic-ui-react'
import DialogModal from "./components/modals/DialogModal"
import { useBaseModal } from './Hook/useBaseModal'
// import "./App.css";


function App() {

  const handleClick =()=>{
    alert(123)
  }

  const infoModal =  useBaseModal()

  return (
    <>
          <DialogModal
           isOpen={infoModal.isOpen}
           onClose={infoModal.close}
          />
           {/* <Button onClick={infoModal.open} className='start'>Click Here</Button> */}
    </>
  )
}

export default App

