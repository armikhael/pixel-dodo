import type { NextPage } from 'next'
import Heads from '@components/Head'

const Donations: NextPage = () => {
	return (
		<>
			<Heads
				detail={{
					title: 'Pixeldodo | Donations',
					description: 'Pixeldodo is a vibrant community of creatives who share copyright-free images',
				}}
			/>
			<h1>Donations</h1>
		</>
	)
}

export default Donations
