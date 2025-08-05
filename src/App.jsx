import { Toaster } from "@/components/ui/sonner"
import Routes from "@/routes"

const App = () => {
  return (
    <div className="w-full">
      <Routes />
      <Toaster />
    </div>
  )
}

export default App