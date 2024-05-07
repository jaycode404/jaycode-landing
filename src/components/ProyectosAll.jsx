import { Typography } from '@material-tailwind/react'
import React from 'react'
import ProyectosGrid from './ProyectosGrid'

export default function ProyectosAll() {
  return (
    <div>
      <div  className='proyectos-all-container'>

      <Typography variant='h1' className='pt-[4rem] section-title ml-4'>Todos los proyectos</Typography>
      <ProyectosGrid/>
      </div>
    </div>
  )
}
