import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<>
			<main className="font-poppins">{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
