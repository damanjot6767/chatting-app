import Sidebar from "../components/sidebar/Sidebar";

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Sidebar>
         
          {children}
    </Sidebar>
  );
}
