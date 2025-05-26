import Header from "@/components/Custom/Header/Header";

const WithoutDashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default WithoutDashboardLayout;
