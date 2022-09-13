import React from 'react'
import { useImperativeHandle } from 'react'
import { useRef } from 'react'

const Input = React.forwardRef((props,ref)=> {
  const inputRef = useRef()

  const disable = ()=> {
    inputRef.current.focus();
  }

  useImperativeHandle(ref, ()=> {
    return {
      changeColor : disable
    }
  })

  return (
    <input ref={inputRef} type="text" />
  )
})

export default Input