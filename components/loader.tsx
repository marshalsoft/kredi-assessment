import { View,Modal,ActivityIndicator } from 'react-native'
import React from 'react'
import { LoaderProps } from '../includes/types';
import { ModalLayout,CenterView } from './index';
import CONSTANTS from '../includes/constants';

const LoaderView = (props:LoaderProps) => {
return (<Modal
visible={props.status}
transparent={true}
>
<ModalLayout>
<CenterView>
<ActivityIndicator 
color={CONSTANTS.COLORS.Orange}
size="large"
/>
</CenterView>
</ModalLayout>
</Modal>)
}

export default LoaderView;
