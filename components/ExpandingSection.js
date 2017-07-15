import React, { Component } from 'react'
import OutLink from '../components/OutLink'
import ClickHeading from '../components/ClickHeading'

class ExpandingSection extends Component {
  state = {
    displayContent: false
  }

  clickHandler = () => {
    this.setState({
      displayContent: !this.state.displayContent
    })
  }

  isEven = () => this.props.index % 2 === 0

  ImageSection = ({ img, imgText, imgTitle }) => {
    return (
      <div className='col s12 m6 order-1'>
        <img
          className='responsive-img z-depth-1'
          src={img}
          alt={imgText}
          title={imgTitle}
        />
      </div>
    )
  }

  TextSection = ({ extraClasses, url, title, content }) => {
    return (
      <div className={`col s12 flow-text ${extraClasses}`}>
        <span dangerouslySetInnerHTML={{ __html: content }} />
        {url &&
          <OutLink to={url} title={title} label={`linkTo${url}`}>
            <button className='btn waves-effect waves-light'>Learn More</button>
          </OutLink>}
      </div>
    )
  }

  render () {
    const ImageSection = this.ImageSection
    const TextSection = this.TextSection
    const hasImage = !!this.props.img // !! is boolean coercion
    const moreClasses = !hasImage ? 'valign order-2' : '' // text only section gets these

    return (
      <div className='sub-section'>
        <ClickHeading
          clickHandler={this.clickHandler}
          displayContent={this.state.displayContent}
          title={this.props.title}
        />

        {this.state.displayContent &&
          <div className='row valign-wrapper'>
            {hasImage && this.isEven() && <ImageSection {...this.props} />}
            <TextSection extraClasses={moreClasses} {...this.props} />
            {hasImage && !this.isEven() && <ImageSection {...this.props} />}
          </div>}
      </div>
    )
  }
}

export default ExpandingSection
