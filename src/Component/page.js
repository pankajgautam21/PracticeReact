import React from 'react'
import Card from './cards'

export default function page() {
  return (
    <div>
    <div className='d-flex justify-content-around align-items-center my-5'>
        <Card title="Burger"/>
        <Card title="Pani puri"/>
        <Card title="Pizza"/>
    </div>
    <div className='d-flex justify-content-around align-items-center my-5'>
        <Card title="Momos"/>
        <Card title="Pav bhaji"/>
        <Card title="Chowmein"/>
    </div>
    </div>
  )
}
