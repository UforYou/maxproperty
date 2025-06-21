import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "@/assets/styles/global.css"

export const metadata ={
    title:'Max Property',
    keywords:'rental,property,real estate',
    description:'find perfect rental property',
};
const MainLayout = ({children}) => {
    return ( <html>
        <body>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </body>
    </html> );
}
 
export default MainLayout;