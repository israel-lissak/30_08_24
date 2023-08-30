import React from 'react'

interface Props{
  title: string
  size: 'small'|'medium'|'large'
}

export default function Title(props: Props) {
    
  return (
    <h2 style={{fontSize: props.size}}>{props.title}</h2>
  )
}
