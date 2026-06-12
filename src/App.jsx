import { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import useLenis from './hooks/useLenis'
import Layout from './layout/Layout'
import ScrollToTop from './layout/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Grain from './components/Grain'
import BlueprintGrid from './components/BlueprintGrid'
import CookieConsent from './components/CookieConsent'
import FloatingDock from './components/FloatingDock'

// Route-level code splitting — each page is its own chunk.
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Team = lazy(() => import('./pages/Team'))
const Journal = lazy(() => import('./pages/Journal'))
const JournalPost = lazy(() => import('./pages/JournalPost'))
const Estimate = lazy(() => import('./pages/Estimate'))
const Guarantees = lazy(() => import('./pages/Guarantees'))
const Contacts = lazy(() => import('./pages/Contacts'))
const Legal = lazy(() => import('./pages/Legal'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  useLenis()
  const location = useLocation()

  return (
    <>
      <Loader />
      <BlueprintGrid />
      <Grain />
      <Cursor />
      <a className="skip-link" href="#main">Перейти до контенту</a>

      <Layout>
        <ScrollToTop />
        <ErrorBoundary>
          <Suspense fallback={<div className="route-fallback" aria-busy="true" />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="/team" element={<Team />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/journal/:slug" element={<JournalPost />} />
                <Route path="/estimate" element={<Estimate />} />
                <Route path="/guarantees" element={<Guarantees />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/privacy" element={<Legal kind="privacy" />} />
                <Route path="/cookies" element={<Legal kind="cookies" />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </ErrorBoundary>
      </Layout>

      <FloatingDock />
      <CookieConsent />
    </>
  )
}
