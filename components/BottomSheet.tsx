import React, { useCallback, forwardRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

export const BottomSheetComponent = forwardRef((_, ref) => {
  // Callback for handling changes
	const handleSheetChanges = useCallback((index) => {
		console.log('handleSheetChanges', index);
	}, []);

	return (
		<GestureHandlerRootView style={styles.container}>
		<BottomSheet
			ref={ref}
			index={-1} // Initially closed
			snapPoints={['98%']} // Fullscreen height
			enablePanDownToClose={true} // Enable swipe down to close
			handleIndicatorStyle={{height:0}}
			onChange={handleSheetChanges}>
			<BottomSheetView style={styles.contentContainer}>
			<Text>Awesome 🎉</Text>
			</BottomSheetView>
		</BottomSheet>
		</GestureHandlerRootView>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentContainer: {
		flex: 1,
		padding: 36,
		alignItems: 'center',
		backgroundColor : "red"
	},
});

export default BottomSheetComponent;
