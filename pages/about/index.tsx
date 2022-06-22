import type { NextPage } from 'next'
import Heads from '@components/Head'

const About: NextPage = () => {
	return (
		<>
			<Heads
				detail={{
					title: 'Pixeldodo | Contact',
					description: 'Pixeldodo is a vibrant community of creatives who share copyright-free images',
				}}
			/>
			<h1>Contact</h1>
		</>
	)
}

export default About
