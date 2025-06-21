import "@/assets/styles/global.css"

export const metadata ={
    title:'Max Property',
    keywords:'rental,property,real estate',
    description:'find perfect rental property',
};
const MainLayout = ({children}) => {
    return ( <html>
        <body>
            <main>{children}</main>
        </body>
    </html> );
}
 
export default MainLayout;