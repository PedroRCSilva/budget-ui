import { RootProvider } from '@providers'
import '@testing-library/jest-dom'
import { getByText, render } from '@testing-library/react'

it('renders learn reawct link', () => {
  const screen = render(<RootProvider />)
  const linkElement = getByText(screen.container, /learn-react/g)
  expect(linkElement).toBeInTheDocument()
})
