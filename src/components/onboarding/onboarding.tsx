import {
	FlatList,
	View,
	Text,
	Image,
	useWindowDimensions,
	NativeScrollEvent,
	NativeSyntheticEvent,
	TouchableOpacity,
} from 'react-native';
import { onboardingItems } from '../../constants/onboardingItems';
import React from 'react';
import OnboardingItem from './onBoardItem';
import { useRouter } from 'expo-router';

const Onboarding = () => {
	const [currentIndex, setCurrentIndex] = React.useState<number>(0);
	const onboardingRef = React.useRef<FlatList>(null);
	const { width } = useWindowDimensions();
	const router = useRouter();
	const updateCurrentIndex = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
		const contentOffsetX = e.nativeEvent.contentOffset.x;
		const newIndex = Math.round(contentOffsetX / width);
		setCurrentIndex(newIndex);
	};

	const handleNextItem = () => {
		const nextIndex = currentIndex + 1;
		if (nextIndex != onboardingItems.length) {
			const offset = nextIndex * width;
			onboardingRef.current?.scrollToOffset({ offset });
			setCurrentIndex(nextIndex);
		}
	};

	const handleSkip = () => {
		const lastIndex = onboardingItems.length - 1;
		const offset = lastIndex * width;
		onboardingRef.current?.scrollToOffset({ offset });
		setCurrentIndex(lastIndex);
	};
	return (
		<View className="flex-1 justify-center items-center">
			<FlatList
				ref={onboardingRef}
				data={onboardingItems}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item.id.toString()}
				bounces={false}
				onMomentumScrollEnd={updateCurrentIndex}
				renderItem={({ item }) => <OnboardingItem item={item} />}
			/>
			<View className="gap-2 flex-row mt-10">
				{onboardingItems.map((_, index) => (
					<View
						key={index}
						className={`h-1 w-2 bg-slate-300 ${index === currentIndex && 'bg-slate-600 w-4'}`}
					/>
				))}
			</View>
			{currentIndex === onboardingItems.length - 1 ? (
				<View className="w-full flex-row gap-2 p-5">
					<TouchableOpacity
						onPress={() => router.replace('signUp')}
						className="bg-slate-700 flex-1 rounded-md p-4 items-center"
					>
						<Text>Criar conta</Text>
					</TouchableOpacity>
				</View>
			) : (
				<View className="w-full flex-row gap-2 p-5">
					<TouchableOpacity
						onPress={handleSkip}
						className="border flex-1 rounded-md p-4 items-center"
					>
						<Text>Pular</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={handleNextItem}
						className="border flex-1 rounded-md p-4 items-center"
					>
						<Text>Próximo</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

export default Onboarding;
