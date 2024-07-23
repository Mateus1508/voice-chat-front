import React from 'react';
import LottieView from 'lottie-react-native';
import { Animated } from 'react-native';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const TalkingAnimation = () => {
	return (
		<AnimatedLottieView
			style={{ width: 240, height: 240, position: 'absolute' }}
			source={require('../../lottieAnimations/talking.json')}
			autoPlay
			loop
		/>
	);
};

export default TalkingAnimation;
