import AsyncStorage from '@react-native-async-storage/async-storage';
import { Slot, useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Onboarding from '../components/onboarding/onboarding';

const RootLayout = () => {
	return (
		<SafeAreaView className="flex-1">
			<StatusBar hidden />
			<Slot />
		</SafeAreaView>
	);
};

export default RootLayout;
