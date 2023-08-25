import react from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"

import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CreateRecepies from "./pages/CreateRecepies"
import SavedRecepies from "./pages/SavedRecepies"
import Login from "./pages/Login"
import Register from "./pages/Register"
import RecepiesDetails from "./pages/RecepiesDetails"
import Results from "./pages/Results"
import AllRecipes from "./pages/AllRecipes"

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-between">
      <main className="">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createrecepies" element={<CreateRecepies />} />
          <Route path="/details/:id" element={<RecepiesDetails />} />
          <Route path="/results/:nome" element={<Results />} />
          <Route path="/savedrecepies/" element={<SavedRecepies />} />
          <Route path="/allrecipes" element={<AllRecipes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
