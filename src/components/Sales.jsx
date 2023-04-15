import React from "react"
import Title from "./utils/title"
import Item from "./utils/Item"

const Sales = ({ ifExist, endPoint: { title, items } }) => {
  return (
    <>
      <div className='nike-container'>
        <Title title={title} />
        <div
          className={`grid items-center justify-items-center  gap-7 lg:gap-5 mt-7 ${
            ifExist
              ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
              : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
          }`}
        >
          {items?.map((item, i) => (
            <Item key={i} {...item} ifExist={ifExist} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Sales
