import { Typography } from '@material-tailwind/react'
import React from 'react'
import ProyectosGrid from './ProyectosGrid'

export default function ProyectosAll() {
  return (
    <div>
      <div  className='proyectos-all-container'>

      <Typography variant='h1' className='pt-8 section-title'>Todos los proyectos</Typography>
      <ProyectosGrid/>
      </div>
    </div>
  )
}
