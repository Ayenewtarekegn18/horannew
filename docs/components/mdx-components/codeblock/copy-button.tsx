import {
  ButtonProps,
  IconButton,
  Tooltip,
  useClipboard,
} from '@chakra-ui/react'
import { t } from '../../../utils/i18n'

import { CheckIcon, CopyIcon } from '@chakra-ui/icons'

interface CopyButtonProps extends ButtonProps {
  code: string
}

function CopyButton({ code, ...props }: CopyButtonProps) {
  const { hasCopied, onCopy } = useClipboard(code)

  const label = hasCopied
    ? t('component.mdx-components.copy-button.copied')
    : t('component.mdx-components.copy-button.copy')

  return (
    <Tooltip label={label}>
      <IconButton
        size="sm"
        position="absolute"
        color="white"
        fontSize="sm"
        height="24px"
        top={0}
        zIndex="1"
        right="1.25em"
        variant="ghost"
        bg="code-bg"
        _hover={{ bg: 'code-bg' }}
        {...props}
        aria-label="copy"
        onClick={onCopy}
      >
        {hasCopied ? <CheckIcon /> : <CopyIcon />}
      </IconButton>
    </Tooltip>
  )
}

export default CopyButton
