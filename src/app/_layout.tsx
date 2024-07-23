import { Slot } from 'expo-router';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

const RootLayout = () => {
	return (
		<SafeAreaView className="flex-1">
			<StatusBar hidden />
			<Slot />
		</SafeAreaView>
	);
};

export default RootLayout;
