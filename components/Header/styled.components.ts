import styled from 'styled-components'

export const HeaderContent = styled.header`
	background-color: #151515;
	color: #fff;
	height: 58px;
	padding: 19px 10px;
	border-bottom: 1px solid #eee;
`

export const Links = styled.a<any>`
	cursor: pointer;
	font-size: 14px;
	font-weight: 300;
	border-radius: 4px;
	border: ${(props) => props.line && '1px solid #eeee'};
	&:hover {
		color: #1198d3;
		border: ${(props) => props.line && '1px solid #1198d3'};
	}
`

export const Nav = styled.nav`
	${Links} {
		margin-right: 25px;
		padding: 7px 15px;
	}
`

export const InputSearch = styled.div`
	position: relative;
	margin-top: -8px;
	input {
		width: 100%;
		padding: 10px 10px 10px 50px;
		border-radius: 4px;
		border: none;
		background-color: #fff;
		::placeholder {
			color: #7d8893;
		}
		:focus-visible {
			outline: none;
		}
	}
	span::before {
		content: '';
		display: block;
		height: 26px;
		border-left: 1px solid #eeeeee;
		position: absolute;
		top: 5px;
		left: 37px;
	}
	div {
		position: absolute;
		top: 9px;
		left: 12px;
		cursor: pointer;
	}
`
