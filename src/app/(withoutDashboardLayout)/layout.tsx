import NavBar from "@/components/Custom/Navbar/Navbar";

const WithoutDashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default WithoutDashboardLayout;
