import { Provider } from "react-redux"
import { Counter } from "./components/Counter"
import { Display } from "./components/Display"

export const App = () => {
  return (

    <div>
      <Display />
      <Counter />
    </div>

  )
}

