import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export const ProductsPage = () => {
    const { id }= useParams()
    const { params }= useSearchParams()

  return (
    <div>Product Page { id } {params.get('sort') } </div>
  )
}
