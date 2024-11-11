import React from 'react'
import style from "./Page5.module.css"
import Card from './Card'
import { carddata } from '../../utils/data'
import { createTheme, ThemeProvider, Typography } from '@mui/material'
function Page5() {
  const theme = createTheme({
    palette: {
      mode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
      background:{
        default:window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? '#121212' : ''}
    },
  })
  return (
    <ThemeProvider theme={theme}>
    <div className={style.page5}>
      <Typography variant='h1'>GUCCI SERVICES</Typography>
      <Typography className={style.container}>
        {carddata.map((elem)=><Card key={elem.id}  video={elem.video} title={elem.h2} para={elem.p} link={elem.link} />) }
      </Typography>
    </div>
    </ThemeProvider>
  )
}

export default Page5
