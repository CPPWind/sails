import {
  faBars,
  faHome,
  faUser,
  faUserCheck,
  faWindowClose,
  faSearch,
  faSpade,
  faClub,
  faHeart,
  faDiamond,
  faPencil,
  faTimes,
  faStar,
  faMoon,
} from '@fortawesome/pro-solid-svg-icons'

import {
  faCheckCircle,
  faChevronDoubleLeft,
  faChevronDoubleRight,
  faChevronRight,
} from '@fortawesome/pro-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

export const allIcons = [
  'none',
  'bars',
  'check-circle',
  'chevron-double-right',
  'chevron-double-left',
  'chevron-right',
  'home',
  'search',
  'user',
  'user-check',
  'window-close',
  'spade',
  'club',
  'heart',
  'diamond',
  'pencil',
  'times',
  'star',
  'moon',
]

const setupIcons = () => {
  library.add(
    faBars,
    faCheckCircle,
    faChevronDoubleRight,
    faChevronDoubleLeft,
    faChevronRight,
    faHome,
    faSearch,
    faUser,
    faUserCheck,
    faWindowClose,
    faSpade,
    faClub,
    faHeart,
    faDiamond,
    faPencil,
    faTimes,
    faStar,
    faMoon,
  )
}

export default setupIcons
