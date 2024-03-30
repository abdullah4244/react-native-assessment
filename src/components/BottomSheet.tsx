import { View,Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import SecondaryButton from './UI/SecondaryButton';
type BottomSheetProps = {
    message : string;
    isVisible : boolean;
    setIsVisible : React.Dispatch<React.SetStateAction<boolean>>;
}

const BottomSheet = ({message,isVisible,setIsVisible} : BottomSheetProps) => {

  return (
    <Modal isVisible={isVisible}   style={styles.view} swipeDirection={['up', 'left', 'right', 'down']}>
        <View style={styles.containerStyle}>
        <View style={styles.content}>
               <Text style={styles.title}>Yikes!</Text>
                <Text style={styles.description}>{message}</Text>
                <SecondaryButton onPress={()=>setIsVisible(false)} label='Try Again'/>
            </View>
        </View>
    </Modal>
  )
}

export default BottomSheet

export const styles = StyleSheet.create({
    view: {
        justifyContent: 'flex-end',
        margin: 0,
      },
      containerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
         alignItems: 'flex-end'
    },
    title : {
     fontSize : 22,
     fontWeight : '700',
     color : "#353535",
     marginBottom : 10
    },
    content: {
        width: '100%',
        height: '30%',
        backgroundColor: 'white',
        overflow: 'hidden',
        padding : 16
      },
      description : {
        fontSize : 18,
     fontWeight : '600',
     color : "#353535",
     marginBottom : 30
      }
})