import dynamic from "next/dynamic"
import ElementsLoading from "./components/ElementsLoading"

const ElementsApp = dynamic(
  () => import("./components/ElementsApp"),
  { loading: ElementsLoading, ssr: false }
)

export default ElementsApp

//import React from "react"
//import ReactDOM from "react-dom"
//import NivoChart from "./NivoChart"
//
//ReactDOM.render(
//  <React.StrictMode>
//    <NivoChart />
//  </React.StrictMode>,
//  document.getElementById("root")
//)