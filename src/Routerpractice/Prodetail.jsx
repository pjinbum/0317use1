import React from 'react'
import { useParams } from 'react-router-dom'

const Prodetail = () => {

    const params = useParams();
    console.log(params)
  return (
    <div>Prodetail
        마르고 닳도록 하나님이 보우하사
    </div>
  )
}

export default Prodetail