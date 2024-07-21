import { View, Image, Text, useWindowDimensions } from 'react-native';
import { OnboardingItemsInteface } from '../../interfaces/onboardingItemsInterface';

interface Props {
	item: OnboardingItemsInteface;
}

const OnboardingItem = ({ item }: Props) => {
	const { width } = useWindowDimensions();
	return (
		<View
			style={{ width }}
			className="justify-center items-center gap-2 p-4"
		>
			<Image
				className="h-52 mb-10"
				source={item.image}
				alt={item.title}
				style={{ width: width * 0.8, height: width * 0.8 }}
			/>
			<Text className="font-bold text-3xl text-white">{item.title}</Text>
			<Text className="text-md text-white">{item.description}</Text>
		</View>
	);
};

export default OnboardingItem;
