import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from "./components/Sidebar"
import AddProduct from "./components/addProduct/AddProduct";

function App() {

  return (
    <>
    {/* <AddProduct/> */}
      <div className="flex">
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="View" active />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Edit Products" active /> 
        </Sidebar>
      </div>
    </>
  )
}

export default App
