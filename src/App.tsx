import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { DocLayout } from './components/DocLayout'
import { Layout } from './components/Layout'
import { DocPage } from './pages/DocPage'
import { DocsIndexPage } from './pages/DocsIndexPage'
import { HomePage } from './pages/HomePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="docs" element={<DocLayout />}>
            <Route index element={<DocsIndexPage />} />
            <Route path=":slug" element={<DocPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
