import { ImageSourcePropType } from 'react-native';

export interface OnboardingItemsInteface {
	id: number;
	title: string;
	image?: ImageSourcePropType;
	description: string;
}
