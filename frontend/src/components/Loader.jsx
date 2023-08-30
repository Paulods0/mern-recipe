import React from "react"
import { InfinitySpin } from "react-loader-spinner"

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <InfinitySpin width="200" color="black" />
    </div>
  )
}

export default Loader
