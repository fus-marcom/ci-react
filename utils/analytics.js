import ReactGA from 'react-ga'

export const initGA = () => {
  console.log('GA init')
  ReactGA.initialize('UA-5819863-21')
}
export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}