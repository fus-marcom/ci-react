import React, { Component } from 'react'
class MaterialSelect extends Component {
  render () {
    return (
      <div class='select-wrapper' style={{ marginTop: '8px' }}>
        <select
          onChange={e => this.props.setCategory(e.target.value)}
          style={{ display: 'block' }}
          value={this.props.category}
        >
          <option value='15'>
            Choose a category
          </option>
          <option value='0'>All</option>
          {this.props.categories !== ''
            ? this.props.categories.map(category =>
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
              )
            : ''}

        </select>
        <style jsx>
          {`
            select {
              width: 100%;
              -webkit-appearance: none;
              -moz-appearance: none;
              background: none;
              border: none;
              border-bottom: 1px solid #fff;
              font-weight: 400;
              position: relative;
              z-index: 2;
              border-radius: 0;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
              -webkit-tap-highlight-color: transparent;
              outline: 0;
              outline-color: initial;
              outline-style: initial;
              outline-width: 0px;
              line-height: 1.4;
              font-size: 16px;
              color: #fff;
              font-size: 16px;
              display: inline-block;
            }
          `}
        </style>
      </div>
    )
  }
}

export default MaterialSelect
