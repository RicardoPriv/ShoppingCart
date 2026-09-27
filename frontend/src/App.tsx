import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from "./router/routes.tsx"

function App() {

  return (
    <main id="flux-store-container">
      <RouterProvider router={router} />
    </main>
  )
}

export default App
