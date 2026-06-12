import { Component } from 'react'

// Catches render errors in the routed tree so one broken page can't blank the app.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error, info) {
    if (import.meta.env.DEV) console.error('ErrorBoundary:', error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <section className="notfound">
          <div className="container notfound__inner">
            <span className="notfound__code">!</span>
            <h1 className="notfound__title">Щось пішло не так</h1>
            <p className="notfound__text">Сталася помилка під час відображення сторінки.</p>
            <a className="btn btn--accent btn--lg" href="/">На головну</a>
          </div>
        </section>
      )
    }
    return this.props.children
  }
}
