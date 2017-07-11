/* global initSelect */
import React, { Component } from 'react'
class MaterialSelect extends Component {
  componentDidUpdate () {
    initSelect()
  }

  render () {
    return (
      <select>
        <option value='' disabled selected>
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
    )
  }
}

export default MaterialSelect
