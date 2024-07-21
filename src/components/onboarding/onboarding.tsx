import {
	FlatList,
	View,
	useWindowDimensions,
	NativeScrollEvent,
	NativeSyntheticEvent,
} from 'react-native';
import { onboardingItems } from '../../constants/onboardingItems';
import React from 'react';
import OnboardingItem from './onBoardItem';
import { useRouter } from 'expo-router';
import DefaultBtn from '../defaultButton';

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
		if (nextIndex < onboardingItems.length) {
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
		<View className="flex-1 justify-center items-center bg-slate-900">
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
			<View className="gap-2 flex-row mb-10">
				{onboardingItems.map((_, index) => (
					<View
						key={index}
						className={`h-1 w-2 bg-slate-400 ${index === currentIndex && 'bg-slate-200 w-4'}`}
					/>
				))}
			</View>
			{currentIndex === onboardingItems.length - 1 ? (
				<View className="w-full flex-row p-5">
					<DefaultBtn
						onPress={() => router.replace('signUp')}
						name="Criar conta"
						outline
					/>
					<View className="w-1" />
					<DefaultBtn
						onPress={() => router.replace('signIn')}
						name="Entrar"
					/>
				</View>
			) : (
				<View className="w-full flex-row p-5">
					<DefaultBtn onPress={handleSkip} name="Pular" outline />
					<View className="w-1" />
					<DefaultBtn onPress={handleNextItem} name="Próximo" />
				</View>
			)}
		</View>
	);
};

export default Onboarding;
