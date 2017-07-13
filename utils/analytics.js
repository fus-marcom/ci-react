import ReactGA from 'react-ga'

export const initGA = () => {
  ReactGA.initialize('UA-5819863-21')
}
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
