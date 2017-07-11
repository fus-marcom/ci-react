import React, { Component } from 'react'
class MaterialSelect extends Component {
  render () {
    return (
      <select
        onChange={e => this.props.setCategory(e.target.value)}
        style={{ display: 'block' }}
      >
        <option value='' disabled>
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
