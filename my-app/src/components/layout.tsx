import Navbar from './Navbar'

const Layout = ({ children }: React.PropsWithChildren) => (
    <>
        <header>
            <Navbar />
        </header>
        <main>
            {children}
        </main>
    </>
);


export default Layout;