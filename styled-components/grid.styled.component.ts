import styled from 'styled-components'

export const Row = styled.div`
	display: flex;
	flex-flow: row wrap;
`

type InterfaceCol = {
	span: number
}

let col = [
	'0',
	'4.16666667%',
	'8.33333333%',
	'12.5%',
	'16.66666667%',
	'20.83333333%',
	'25%',
	'29.16666667%',
	'33.333%',
	'37.5%',
	'41.66666667%',
	'45.83333333%',
	'50%',
	'54.16666667%',
	'58.33333333%',
	'62.5%',
	'66.66666667%',
	'70.83333333%',
	'75%',
	'79.16666667%',
	'83.33333333%',
	'87.5%',
	'91.66666667%',
	'95.83333333%',
	'100%',
]

export const Col = styled.div<InterfaceCol>`
	display: block;
	position: relative;
	flex: 0 0 ${(props) => col[props.span]};
	max-width: ${(props) => col[props.span]};
`
