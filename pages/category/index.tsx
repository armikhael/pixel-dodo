import type { NextPage } from 'next'
import Heads from '@components/Head'

const Category: NextPage = () => {
	return (
		<>
			<Heads
				detail={{
					title: 'Pixeldodo | Category',
					description: 'Pixeldodo is a vibrant community of creatives who share copyright-free images',
				}}
			/>
			<h1>Category</h1>
		</>
	)
}

export default Category
