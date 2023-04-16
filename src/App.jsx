import React from "react"
import { FlexContent, Hero, Sales, Stories } from "./components"
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story
} from "./data/data"

const App = () => {
  return (
    <>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endPoint={popularsales} ifExist />
        <FlexContent endPoint={highlight} ifExist />
        <Sales endPoint={toprateslaes} />
        <FlexContent endPoint={sneaker} />
        <Stories story={story} />
      </main>
    </>
  )
}

export default App
