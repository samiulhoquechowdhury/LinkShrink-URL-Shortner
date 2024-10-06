import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="px-16 min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10 text-white">
        Made with ❤️ by Samiul Chowdhury
      </div>
      {/* footer */}
    </div>
  );
};

export default AppLayout;
