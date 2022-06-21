import type { NextPage } from 'next'
import Heads from '@components/Head'

const Detail: NextPage = () => {
	return (
		<>
			<Heads
				detail={{
					title: 'Pixeldodo | Images Name',
					description: 'Pixeldodo is a vibrant community of creatives who share copyright-free images',
				}}
			/>
			<h1>Detail</h1>
		</>
	)
}

export default Detail
