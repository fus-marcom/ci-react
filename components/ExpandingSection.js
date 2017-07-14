import React, { Component } from 'react'
import OutLink from '../components/OutLink'

class ExpandingSection extends Component {
  state = {
    displayContent: false
  }

  isEven = () => this.props.index % 2 === 0

  render () {
    return (
      <div className='sub-section' key={this.props.key}>
        {this.props.img !== ''
          ? <div>
            <h3
              onClick={() =>
                  this.setState({
                    displayContent: !this.state.displayContent
                  })}
              >
              <svg
                fill='#000000'
                height='24'
                viewBox='0 0 24 24'
                width='24'
                xmlns='http://www.w3.org/2000/svg'
                style={{
                  transform: `rotate(${this.state.displayContent
                      ? '90'
                      : '0'}deg)`
                }}
                >
                <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
                <path d='M0 0h24v24H0z' fill='none' />
              </svg>
              <span dangerouslySetInnerHTML={{ __html: this.props.title }} />
            </h3>

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
            <h3
              onClick={() =>
                  this.setState({
                    displayContent: !this.state.displayContent
                  })}
              >
              <svg
                fill='#000000'
                height='24'
                viewBox='0 0 24 24'
                width='24'
                xmlns='http://www.w3.org/2000/svg'
                style={{
                  transform: `rotate(${this.state.displayContent
                      ? '90'
                      : '0'}deg)`
                }}
                >
                <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
                <path d='M0 0h24v24H0z' fill='none' />
              </svg>
              <span dangerouslySetInnerHTML={{ __html: this.props.title }} />
            </h3>
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
