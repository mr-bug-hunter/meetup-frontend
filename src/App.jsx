import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Events from './components/Events'
import { useState } from "react"
 

export default function App(){
  const [searchTitle, setSearchTitle] = useState("")
  return (
    <div className='container bg-light'>
      <Header searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
      <Events searchTitle={searchTitle} />
    </div>
  )
}
