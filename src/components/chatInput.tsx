import { Animated, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';

const ChatInput = () => {
	const [speaking, setSpeaking] = React.useState<boolean>(false);

	const scaleAnim = React.useRef(new Animated.Value(1)).current;

	const opacityAnim = React.useRef(new Animated.Value(1)).current;

	React.useEffect(() => {
		if (speaking) {
			Animated.loop(
				Animated.sequence([
					Animated.timing(scaleAnim, {
						toValue: 1.2,
						duration: 500,
						useNativeDriver: true,
					}),
					Animated.timing(scaleAnim, {
						toValue: 1,
						duration: 500,
						useNativeDriver: true,
					}),
				]),
			).start();

			Animated.loop(
				Animated.sequence([
					Animated.timing(opacityAnim, {
						toValue: 0.5,
						duration: 500,
						useNativeDriver: true,
					}),
					Animated.timing(opacityAnim, {
						toValue: 1.2,
						duration: 500,
						useNativeDriver: true,
					}),
				]),
			).start();
		} else {
			Animated.timing(scaleAnim, {
				toValue: 1.2,
				duration: 300,
				useNativeDriver: true,
			}).stop();

			Animated.timing(opacityAnim, {
				toValue: 1,
				duration: 300,
				useNativeDriver: true,
			}).stop();
		}
	}, [speaking]);
	return (
		<View className="justify-evenly items-center my-5 flex-row ">
			<TouchableOpacity
				onPress={() => setSpeaking(!speaking)}
				className="items-center w-24"
			>
				<Animated.View
					style={{
						transform: [{ scale: scaleAnim }],
						backgroundColor: speaking
							? 'rgba(255, 0, 0, 0.3)'
							: 'transparent',
						borderRadius: 50,
						paddingHorizontal: 25,
						paddingVertical: 15,
						opacity: opacityAnim,
					}}
				>
					<FontAwesome5
						name="microphone-alt"
						size={64}
						color={speaking ? 'red' : 'white'}
					/>
				</Animated.View>
			</TouchableOpacity>
		</View>
	);
};

export default ChatInput;
