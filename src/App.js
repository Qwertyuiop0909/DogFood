import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Main } from './components/Main/Main'
import { store } from './Redux/store'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Main />
        <Footer />
      </QueryClientProvider>
    </Provider>
  )
}

export default App
