import sx from './sx'
import PropTypes from 'prop-types'
import Box from './Box'
import theme from './theme'
import {BORDER} from './constants'

const BorderBox = sx.styled(Box)(BORDER)

BorderBox.defaultProps = {
  theme,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'gray.2',
  borderRadius: 2
}

BorderBox.propTypes = {
  theme: PropTypes.object,
  ...Box.propTypes,
  ...BORDER.propTypes,
  ...sx.propTypes
}

export default BorderBox
