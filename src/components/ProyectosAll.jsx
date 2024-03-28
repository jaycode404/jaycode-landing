import { Typography } from '@material-tailwind/react'
import React from 'react'
import ProyectosGrid from './ProyectosGrid'

export default function ProyectosAll() {
  return (
    <div>
      <Typography variant='h1' className='pt-10'>Aqui aparecen todos los proyectos</Typography>
      <ProyectosGrid/>
    </div>
  )
}
