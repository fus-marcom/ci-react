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

  render () {
    return (
      <div className='sub-section' key={this.props.key}>
        {this.props.img !== ''
          ? <div>
            <ClickHeading
              clickHandler={this.clickHandler}
              displayContent={this.state.displayContent}
              title={this.props.title}
              />

            {this.state.displayContent
                ? this.isEven()
                  ? <div className='row valign-wrapper'>
                    <div className='col s12 flow-text valign order-2'>

                      <span
                        dangerouslySetInnerHTML={{
                          __html: this.props.content
                        }}
                        />
                      {this.props.url &&
                      <OutLink
                        to={this.props.url}
                        title={this.props.title}
                        label={`linkTo${this.props.url}`}
                          >
                        <button className='btn waves-effect waves-light'>
                              Learn More
                            </button>
                      </OutLink>}

                    </div>
                    <div className='col s12 m6 order-1'>
                      <img
                        className='responsive-img z-depth-1'
                        src={this.props.img}
                        alt={this.props.imgAlt}
                        title={this.props.imgTitle}
                        />
                    </div>
                  </div>
                  : <div className='row valign-wrapper'>
                    <div className='col s12 m6 order-1'>
                      <img
                        className='responsive-img z-depth-1'
                        src={this.props.img}
                        alt={this.props.imgAlt}
                        title={this.props.imgTitle}
                        />
                    </div>

                    <div className='col s12 flow-text valign order-2'>

                      <span
                        dangerouslySetInnerHTML={{
                          __html: this.props.content
                        }}
                        />
                      {this.props.url !== ''
                          ? <OutLink
                            to={this.props.url}
                            title={this.props.title}
                            label={`linkTo${this.props.url}`}
                            >
                            <button className='btn waves-effect waves-light'>
                                Learn More
                              </button>
                          </OutLink>
                          : ''}
                    </div>

                  </div>
                : ''}

          </div>
          : <div>
            <ClickHeading
              clickHandler={this.clickHandler}
              displayContent={this.state.displayContent}
              title={this.props.title}
              />
            <div className='row valign-wrapper'>
              {this.state.displayContent
                  ? <div className='col s12 flow-text'>
                    <span
                      dangerouslySetInnerHTML={{ __html: this.props.content }}
                      />
                    {this.props.url !== ''
                        ? <OutLink
                          to={this.props.url}
                          title={this.props.title}
                          label={`linkTo${this.props.url}`}
                          >
                          <button className='btn waves-effect waves-light'>
                              Learn More
                            </button>
                        </OutLink>
                        : ''}
                  </div>
                  : ''}

            </div>

          </div>}
      </div>
    )
  }
}

export default ExpandingSection
