import Image from 'next/image'
import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem;
`
export const Logo = styled(Image)`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled(Image)`
  margin: 3rem;
  width: min(30rem, 100%);
`
