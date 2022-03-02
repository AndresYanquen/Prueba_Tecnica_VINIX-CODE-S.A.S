import React from "react"
import Header from "./Components/Header/Header"
import { Main } from "./Components/Main/Main"
import Modal from "./Components/Modal/Modal"
import requestData from "./Components/requestData"
//https://br.pinterest.com/pin/439734351123826677/?d=t&mt=login
function App() {
  const baseUrl = 'https://gorest.co.in/public/v2/'



  return (
    <div className="App">
      <Header> </Header>
      <Main baseUrl={baseUrl}></Main>
    </div>
  )
}

export default App
