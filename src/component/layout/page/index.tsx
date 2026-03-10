import Footer from "./footer"
import Header from "./header"
import { Outlet } from "react-router";

export default function PageLayout() {
  return (
    <div className="bg-surface border-border text-white w-full min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}