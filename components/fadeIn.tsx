import { View, Text,Animated } from 'react-native'
import React ,{FC,PropsWithChildren} from 'react';

const FadeIn:FC<PropsWithChildren<{
  style:any
}>> = ({children,style = {}}) => {
    const [fadeAnim] = React.useState(new Animated.Value(0));
    React.useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver:true
      }).start();
    }, []);
  return (
    <Animated.View
    style={{
        opacity:fadeAnim,
        ...style
      }}
    >
      {children}
    </Animated.View>
  )
}

export default FadeIn