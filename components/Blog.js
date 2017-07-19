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
          __html: props.excerpt
        }}
      />
    </div>
    <a href={`/news/${props.slug}`}><span class='more-link'>Read More</span></a>
    <style jsx>
      {`
        span {
          color: #998643;
          padding-left: 6px;
          margin-bottom: 8px;
          display: block;
        }
        span.more-link {
          padding-left: 16px;
        }
      `}

    </style>
  </div>

export default Blog
