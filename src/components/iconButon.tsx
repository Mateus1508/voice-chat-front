import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
	name?: string;
	icon: React.ReactElement;
	fullWidth?: boolean;
}
const IconButton = (props: Props) => {
	return (
		<TouchableOpacity
			className={`${props.fullWidth ? 'flex-1' : ''} flex-row border border-white justify-center items-center px-4 py-3 rounded-md`}
		>
			{props.icon}
			<Text className="text-white ml-3 font-semibold">{props.name}</Text>
		</TouchableOpacity>
	);
};

export default IconButton;
