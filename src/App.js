import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes/routes'
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient()

function App() {
  return (<>

    <QueryClientProvider client={queryClient}>
      <Routes>
        {
          routes && routes.map(item => {
            return <Route path={item.path} element={item.element} />
          })
        }
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

    

  </>
  )
}

export default App