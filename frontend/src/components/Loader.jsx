import React from "react"
import { InfinitySpin } from "react-loader-spinner"

const Loader = ({color}) => {
  return (
    <div className="flex items-center justify-center">
      <InfinitySpin width="200" color={color} />
    </div>
  )
}

export default Loader
