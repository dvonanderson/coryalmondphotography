import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from '../shared'
// import Navbar from './Navbar'
// import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </ThemeProvider>
  )
}

export default Layout
