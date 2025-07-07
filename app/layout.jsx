import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import { GlobalProvider } from "@/context/GlobalContext";
import 'react-toastify/dist/ReactToastify.css'
import "@/assets/styles/global.css";
import'photoswipe/dist/photoswipe.css'

export const metadata = {
  title: "Max Property",
  keywords: "rental,property,real estate",
  description: "find perfect rental property",
};
const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
      <html>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer  />
        </body>
      </html>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default MainLayout;
