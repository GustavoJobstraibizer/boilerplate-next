import { render, screen } from '@testing-library/react'
import Main from '.'

describe('Main', () => {
  it('should render Main component', () => {
    const { container } = render(<Main />)

    expect(screen.getByTestId('main')).toBeInTheDocument()
    expect(screen.getByText(/React Avançado/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    })
  })
})
