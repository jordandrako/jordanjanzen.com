import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowLeft,
  faArrowRight,
  faFile,
  faLink,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { IIconProps } from './Icon.types';

export const InitializeIcons = () =>
  library.add(faSearch, faLink, faArrowLeft, faArrowRight, faFile, fab);

const Icon = (props: IIconProps) => <FontAwesomeIcon {...props} />;

export default Icon;
