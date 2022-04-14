import React from 'react'
import '../../css/Header/Header.css'
import { words } from '../../static-words'
function Header() {
  return (
    <header>
        
        { words.headerTitle }
    </header>
  )
}

export default Header