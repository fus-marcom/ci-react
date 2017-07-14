import React from 'react'

const ClickHeading = props =>
  <h3 onClick={props.clickHandler}>
    <svg
      fill='#000000'
      height='24'
      viewBox='0 0 24 24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'
      style={{
        transform: `rotate(${props.displayContent ? '90' : '0'}deg)`
      }}
    >
      <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
      <path d='M0 0h24v24H0z' fill='none' />
    </svg>
    <span dangerouslySetInnerHTML={{ __html: props.title }} />
  </h3>

export default ClickHeading
