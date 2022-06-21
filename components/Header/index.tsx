import { useRouter } from 'next/router'

function Header() {
	const router = useRouter()
	return (
		<>
			<header>
				<h3>header</h3>
				<a onClick={() => router.push('/')}>Home</a>
				<br />
				<a onClick={() => router.push('/category')}>Category</a>
				<br />
				<a onClick={() => router.push('/contact')}>Contact</a>
				<br />
				<a onClick={() => router.push('/detail')}>Detail</a>
				<br />
				<a onClick={() => router.push('/donations')}>Donations</a>
			</header>
		</>
	)
}

export default Header
