import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React from 'react';
import Onboarding from '../components/onboarding/onboarding';

const Index = () => {
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
				router.replace('/signIn');
			}
		});
	}, []);
	return <>{isFirstLaunched && <Onboarding />}</>;
};

export default Index;
