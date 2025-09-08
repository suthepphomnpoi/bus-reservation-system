import Navbar from "../../components/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <Sidebar activeIndex={1} />
    </>
  );
}

