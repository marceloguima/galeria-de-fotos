import React from 'react'
import "./style.css"

// icone
import { CgSpinnerTwo } from "react-icons/cg";


const Loader = () => {
  return (
    <div className="loader-container">
      <CgSpinnerTwo className="loader-icon" />
    </div>
  )
}

export default Loader
