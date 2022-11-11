import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './Produto.module.css'

function Produto() {
  const {id} =  useParams()

  return (
    <div style={{color: '#fff'}}>Produto com o id: {id}</div>
  )
}

export default Produto