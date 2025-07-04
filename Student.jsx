import React from 'react'
import { useParams } from 'react-router-dom';

const Student = () => {
    const{id}=useParams();
  return (
    <div><h2>Studen ID:{id}t</h2></div>
  )
}

export default Student;