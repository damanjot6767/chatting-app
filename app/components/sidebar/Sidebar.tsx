import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";

function Sidebar({ children }: { children: React.ReactNode }) {
  
  return (
      <div className="h-full bg-slate-500	">
      <DesktopSidebar />
      <MobileFooter/>
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}

export default Sidebar;
