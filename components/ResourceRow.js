import React from 'react'

const ResourceRow = props =>
  <div
    class='valign-wrapper col s12 resource-row'
    style={{
      borderBottom: '1px solid rgba(0, 0, 0, 0.54)',
      padding: '16px'
    }}
  >

    <div class='col s12 m9 valign'>
      <span
        class='type'
        style={{
          color: '#998643',
          fontSize: '18px',
          display: 'block',
          textTransform: 'uppercase'
        }}
      >
        {props.type}
      </span>
      <h4 style={{ marginBottom: '4px', marginTop: '0px' }}>
        <a
          href={props.url}
          title={props.title}
          style={{ color: '#8e1b21' }}
          dangerouslySetInnerHTML={{
            __html: props.title
          }}
        />
      </h4>

      {props.author === ''
        ? ''
        : <span
          class='author'
          style={{
            color: '#998643',
            display: 'block',
            fontSize: '20px'
          }}
          >
            Author: {props.author}
        </span>}

      <span
        class='read-more'
        style={{
          color: '#8e1b21',
          cursor: 'pointer',
          marginTop: '16px',
          display: 'block'
        }}
      >
        Read More
      </span>
      <p
        class='description'
        style={{ display: 'none' }}
        dangerouslySetInnerHTML={{
          __html: props.description
        }}
      />
    </div>
    <div class='col s12 m3'>
      <img src={props.img} style={{ maxHeight: '200px' }} />

    </div>
    <style jsx>
      {`
        .resource-row:first-of-type {
          border-top: 1px solid rgba(0, 0, 0, 0.54);
        }
      `}
    </style>
  </div>

export default ResourceRow
