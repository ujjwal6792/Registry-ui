import React from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const BackButton = (props) => {
    const navigate = useNavigate()
    const {link} = props
  return (
    <div className="cursor-pointer flex items-center shadow-md w-fit px-2 py-1 mb-4 rounded"
    onClick={()=>navigate(link)}> <IoIosArrowBack/> <span>Back</span></div>

  )
}

export default BackButton