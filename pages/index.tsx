import type { NextPage } from 'next'
import Heads from '@components/Head'

const Home: NextPage = () => {
	return (
		<>
			<Heads
				detail={{
					title: 'Pixeldodo | Free Images',
					description: 'Pixeldodo is a vibrant community of creatives who share copyright-free images',
				}}
			/>
			<h1>Home</h1>
		</>
	)
}

export default Home
