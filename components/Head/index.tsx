import Head from 'next/head'

export interface Interface {
	detail: {
		title: string
		description: string
	}
}

function Heads(props: Interface) {
	return (
		<>
			<Head>
				<title>{props.detail.title}</title>
				<meta name='description' content={props.detail.description} />
				<link rel='icon' href='https://www.pixeldodos.com/favicon.ico' />
			</Head>
		</>
	)
}

export default Heads
