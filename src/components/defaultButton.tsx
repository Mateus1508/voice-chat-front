import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
	name: string;
	outline?: boolean;
}

const DefaultBtn = (props: Props) => {
	return (
		<TouchableOpacity
			{...props}
			className={`${props.outline ? 'border-slate-300' : 'bg-slate-300'} flex-grow border rounded-md p-3 items-center`}
			disabled={props.disabled}
		>
			<Text
				className={`${props.outline ? 'text-white' : 'text-black'} text-lg font-semibold`}
			>
				{props.name}
			</Text>
		</TouchableOpacity>
	);
};

export default DefaultBtn;
