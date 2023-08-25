import React from "react"

const Main = ({
  children,
  shadow = false,
  shadowTop = false,
  others = null,
}) => {
  return (
    <section
      className={`w-full h-[60px] ${others} flex items-center ${
        shadow ? "shadow-md" : ""
      } ${shadowTop ? "shadow-shadowtop" : ""}`}
    >
      <div className={`w-[1200px] mx-auto flex items-center justify-between `}>
        {children}
      </div>
    </section>
  )
}

export default Main
