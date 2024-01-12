import { useState, useEffect } from "react"

export const FollowMouse = () => {
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({x: 0, y: 0})
    const [cursorClass, setCursorClass] = useState('none')

    useEffect(() => {
      console.log('Effect', {enabled})
  
      const handleMove = (event) => {
        const { clientX, clientY } = event
        console.log('handleMove', {clientX, clientY})
        setPosition({x: clientX, y: clientY})
      }
  
      if(enabled) window.addEventListener('pointermove', handleMove)
  
      return () => window.removeEventListener('pointermove', handleMove)
  
    }, [enabled])
  
    useEffect(() => {
      if(enabled) setCursorClass('block')
      document.body.classList.toggle('no-cursor', enabled)
  
      return () => {
        setCursorClass('none')
        document.body.classList.remove('no-cursor')
      }
    }, [enabled])

    return (
      <>
        <div style={{
          backgroundColor: '#09e',
          borderRadius: '50%',
          display: cursorClass,
          height: 40,
          opacity: 0.8,
          pointerEvents: 'none',
          position: 'absolute',
            left: -20,
            top: -20,
          transform: `translate(${position.x}px, ${position.y}px)`,
          width: 40
        }}/>
        <h1>Seguir Cursor</h1>
        <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Desactivado': 'Activado'} Activar Seguir Puntero
        </button>
      </>
    )
  }