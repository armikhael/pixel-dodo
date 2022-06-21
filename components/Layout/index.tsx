import Header from '@components/Header'
import Footer from '@components/Footer'

export interface LayoutProps {
	children: React.ReactNode
}

function Layout(props: LayoutProps) {
	return (
		<>
			<Header />
			<main> {props.children}</main>
			<Footer />
		</>
	)
}

export default Layout
