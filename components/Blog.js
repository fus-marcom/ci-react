import React from 'react'

const Blog = props =>
  <div className='row' key={props.i}>
    <div className='col s12'>
      <a href={`/news/${props.slug}`}>
        <h3 style={{ marginBottom: '0', color: '#8e1b21' }}>{props.title}</h3>
      </a>
      <span>{`${props.date.getMonth() +
        1}/${props.date.getDate()}/${props.date.getFullYear()}`}</span>
      <div
        className='flow-text'
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />
    </div>
  </div>

export default Blog
