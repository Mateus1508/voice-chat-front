import { View } from 'react-native';
import Onboarding from '../components/onboarding/onboarding';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const Main = () => {
	const [isFirstLaunched, setIsFirstLaunched] = React.useState<
		boolean | null
	>(null);
	const router = useRouter();
	React.useEffect(() => {
		AsyncStorage.getItem('isFirstLaunched').then((appData) => {
			if (appData === null) {
				console.log(appData);
				setIsFirstLaunched(true);
				AsyncStorage.setItem('isFirstLaunched', 'false');
			} else {
				setIsFirstLaunched(false);
				router.replace('/signUp');
			}
		});
	}, []);
	return (
		<View className="flex h-full w-full justify-center items-center">
			{isFirstLaunched && <Onboarding />}
		</View>
	);
};

export default Main;
