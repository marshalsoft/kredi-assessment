import React from 'react';
import { TouchableOpacity } from 'react-native';

import { StyleType } from '../includes/types';
import styles from '../includes/styles';

const IconButton = (props: {
  styles?: StyleType | StyleType[];
  onPress?: () => void;
  children?: React.ReactNode;
}) => {
  const { onPress, children, styles: propStyle } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.iconButton, propStyle]}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

export default IconButton;
