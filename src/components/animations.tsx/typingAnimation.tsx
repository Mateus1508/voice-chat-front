import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

interface Props {
	text: string;
}

const TypingAnimation = ({ text }: Props) => {
	const [displayedText, setDisplayedText] = useState<string>('');
	const [isTyping, setIsTyping] = useState<boolean>(false);
	const scrollViewRef = useRef<ScrollView>(null);
	const index = useRef<number>(0);

	useEffect(() => {
		const typeText = () => {
			if (index.current < text.length) {
				setIsTyping(true);
				setDisplayedText((prev) => prev + text[index.current]);
				index.current++;
				setTimeout(typeText, 100);
			} else {
				setIsTyping(false);
			}
		};

		index.current = 0;
		setDisplayedText('');
		typeText();
	}, [text]);

	useEffect(() => {
		if (isTyping) {
			const timer = setInterval(() => {
				scrollViewRef.current?.scrollToEnd({ animated: true });
			}, 50);

			return () => clearInterval(timer);
		}
	}, [isTyping, displayedText]);

	return (
		<View className="h-48 w-full overflow-hidden px-4">
			<ScrollView
				ref={scrollViewRef}
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: 'flex-end',
				}}
				showsVerticalScrollIndicator={false}
				onContentSizeChange={() => {
					if (isTyping) {
						scrollViewRef.current?.scrollToEnd({ animated: true });
					}
				}}
			>
				<Text className="text-lg text-center font-bold text-white py-2">
					{displayedText}
				</Text>
			</ScrollView>
		</View>
	);
};

export default TypingAnimation;
