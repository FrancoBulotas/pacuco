
import Spinner from 'react-bootstrap/Spinner'

function SpinnerButton() {
  return (
    <Spinner as="span" aria-hidden="true" animation="border" role="status" variant='light'></Spinner>
  )
}

export default SpinnerButton