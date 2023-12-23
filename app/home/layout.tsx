import Sidebar from "../components/sidebar/Sidebar";

export default function HomeLayout({
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
