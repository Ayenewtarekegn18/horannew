import React from 'react'
import * as Chakra from '@chakra-ui/react'
import { Badge, BadgeProps, chakra } from '@chakra-ui/react'
import * as Icons from '@chakra-ui/icons'
import * as SaasUI from '@saas-ui/react'
import * as SaasUIAuth from '@saas-ui/auth'
import * as SaasUIForms from '@saas-ui/forms'
import * as DatePicker from '@saas-ui/date-picker'
import * as CommandBar from '@saas-ui/command-bar'
import * as FileUpload from '@saas-ui/file-upload'
import * as z from 'zod'
import * as YupForm from '@saas-ui/forms/yup'
import * as ZodForm from '@saas-ui/forms/zod'
import FocusLock from 'react-focus-lock'
import { yupResolver } from '@hookform/resolvers/yup'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  FiHome,
  FiInbox,
  FiUsers,
  FiUser,
  FiMenu,
  FiX,
  FiFilter,
  FiCircle,
  FiSettings,
  FiTag,
  FiArchive,
  FiTruck,
  FiLock,
  FiCheck,
  FiArrowUp,
  FiArrowDown,
  FiArrowRight,
  FiAlertTriangle,
  FiHelpCircle,
  FiAlignLeft,
  FiAlignRight,
  FiAlignCenter,
  FiBold,
  FiItalic,
  FiUnderline,
  FiLink,
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronDown,
  FiUserCheck,
  FiCode,
  FiRefreshCw,
  FiMessageSquare,
  FiMail,
  FiStar,
  FiEye,
  FiEyeOff,
  FiTrash,
  FiInfo,
  FiHeart,
  FiCalendar,
} from 'react-icons/fi'

import { FaFacebook, FaGithub, FaSlack, FaCookie } from 'react-icons/fa'

import { FaXTwitter } from 'react-icons/fa6'

const reactIcons = {
  FiHome,
  FiInbox,
  FiUsers,
  FiUser,
  FiMenu,
  FiX,
  FiFilter,
  FiCircle,
  FiSettings,
  FiTag,
  FiArchive,
  FiTruck,
  FiLock,
  FiCheck,
  FiArrowUp,
  FiArrowDown,
  FiArrowRight,
  FiAlertTriangle,
  FiHelpCircle,
  FiAlignLeft,
  FiAlignRight,
  FiAlignCenter,
  FiBold,
  FiItalic,
  FiUnderline,
  FiLink,
  FaFacebook,
  FaXTwitter,
  FaGithub,
  FaSlack,
  FaCookie,
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronDown,
  FiUserCheck,
  FiCode,
  FiRefreshCw,
  FiMessageSquare,
  FiMail,
  FiStar,
  FiEye,
  FiEyeOff,
  FiTrash,
  FiInfo,
  FiHeart,
  FiCalendar,
}


import { now, getLocalTimeZone, today } from '@internationalized/date'
import { startOfDay, subDays, formatDistanceToNowStrict } from 'date-fns'

const StarIcon = (props) => (
  <chakra.svg m="2px" fill="current" boxSize="3" viewBox="0 0 24 24" {...props}>
    <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" />
  </chakra.svg>
)

const saveHandler = (params) => {
  console.log(params)
  return new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
}

const StatusBadge = (props: BadgeProps) => (
  <Badge boxSize="8px" mx="2px" borderRadius="full" {...props} />
)


const ThrowSomeError = () => {
  throw new Error()
}

const defaultInitializer = (index: number) => index

export function createRange<T = number>(
  length: number,
  initializer: (index: number) => any = defaultInitializer
): T[] {
  return [...new Array(length)].map((_, index) => initializer(index))
}

/**const kanbanItems: KanbanItems = {
  todo: createRange(4, (index) => `todo${index + 1}`),
  doing: createRange(4, (index) => `doing${index + 1}`),
  done: createRange(4, (index) => `done${index + 1}`),
} }*/

const ReactLiveScope = {
  React,
  ...React,
  ...Chakra,
  ...SaasUI,
  ...SaasUIAuth,
  ...SaasUIForms,
  ...DatePicker,
  ...Icons,
  ...CommandBar,
  yupResolver: yupResolver,
  // ...Loaders,
  ...reactIcons,
  StarIcon,
  FocusLock,
  saveHandler,
  StatusBadge,
  ThrowSomeError,
  import: {
    '@chakra-ui/react': Chakra,
    '@saas-ui/react': SaasUI,
    '@saas-ui/auth': SaasUIAuth,
    '@saas-ui/forms': SaasUIForms,
    '@saas-ui/forms/zod': ZodForm,
    '@saas-ui/forms/yup': YupForm,
    '@saas-ui/command-bar': CommandBar,
    '@saas-ui/file-upload': FileUpload,
    '@saas-ui/date-picker': DatePicker,
    '@chakra-ui/icons': Icons,
    'date-fns': {
      startOfDay,
      subDays,
      formatDistanceToNowStrict,
    },
    'react-icons/fi': reactIcons,
    '@hookform/resolvers/yup': { yupResolver },
    '@hookform/resolvers/zod': { zodResolver },
    '@internationalized/date': { now, getLocalTimeZone, today },
    zod: z,
  },
}

export default ReactLiveScope
