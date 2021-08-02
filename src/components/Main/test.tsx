import { render, screen } from '@testing-library/react'
import Main from '.'

describe('Main', () => {
  it('should render Main component', () => {
    const { container } = render(<Main />)

    expect(screen.getByTestId('main')).toBeInTheDocument()
    expect(screen.getByText(/Hello world/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
