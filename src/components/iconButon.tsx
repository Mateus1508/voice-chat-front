import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
	name?: string;
	icon: React.ReactElement;
	fullWidth?: boolean;
	textVertical?: boolean;
	border?: boolean;
}
const IconButton = (props: Props) => {
	return (
		<TouchableOpacity
			{...props}
			className={`${props.fullWidth ? 'flex-1' : ''} ${props.textVertical ? 'flex-col' : 'flex-row'} ${props.border ? 'border border-white px-4 py-3 rounded-md' : ''} justify-center items-center `}
		>
			{props.icon}
			<Text
				className={`text-white ${!props.name || props.textVertical ? 'mt-1' : 'ml-3'} font-semibold`}
			>
				{props.name}
			</Text>
		</TouchableOpacity>
	);
};

export default IconButton;
