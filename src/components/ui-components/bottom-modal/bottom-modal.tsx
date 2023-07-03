import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';

interface BottomModalProps {
  children: ReactNode;
  isModalVisible: boolean;
  closeModal: () => void;
}

function BottomModal({ children, isModalVisible, closeModal }: BottomModalProps) {
  return (
    <Modal
      isVisible={isModalVisible}
      swipeDirection="down"
      onSwipeComplete={closeModal}
      useNativeDriver={true}
      style={{ margin: 0 }}
    >
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <View style={styles.line} />
          {children}
        </View>
      </View>
    </Modal>
  );
}

export default BottomModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 16,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  line: {
    width: '30%',
    height: 5,
    alignSelf: 'center',
    backgroundColor: '#333232',
    borderRadius: 2,
    marginBottom: 18,
  },
});
