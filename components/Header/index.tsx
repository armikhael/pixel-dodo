import { useRouter } from 'next/router'

import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@styled-components/container.styled.component'
import { Row, Col } from '@styled-components/grid.styled.component'
import { HeaderContent, Nav, Links, InputSearch } from './styled.components'

function Header() {
	const router = useRouter()
	return (
		<>
			<HeaderContent>
				<Container>
					<Row>
						<Col span={4}>
							<Link href='/'>
								<a>
									<Image src='/logo.png' alt='Logo Pixel Dodo' width={141} height={18} />
								</a>
							</Link>
						</Col>
						<Col span={13}>
							<Nav>
								<Links onClick={() => router.push('/category')}>Category</Links>
								<Links onClick={() => router.push('/')}>Licencia</Links>
								<Links line={true} onClick={() => router.push('/donations')}>
									Donations
								</Links>
								<Links onClick={() => router.push('/about')}>Sobre Nosotros</Links>
							</Nav>
						</Col>
						<Col span={7}>
							<InputSearch>
								<div>
									<Image src='/search.png' alt='Icono de Buscar' width={16} height={16} />
								</div>
								<span></span>
								<input placeholder='Buscar Imagenes...' />
							</InputSearch>
						</Col>
					</Row>
				</Container>
			</HeaderContent>
		</>
	)
}

export default Header
