import React from "react"
import { FlexContent, Hero, Sales, Stories, Footer, Navbar } from "./components"
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI
} from "./data/data"

const App = () => {
  return (
    <>
      <Navbar />
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endPoint={popularsales} ifExist />
        <FlexContent endPoint={highlight} ifExist />
        <Sales endPoint={toprateslaes} />
        <FlexContent endPoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  )
}

export default App
