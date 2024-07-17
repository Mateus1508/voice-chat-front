import { Text, TouchableOpacity } from 'react-native';

interface Props {
	name: string;
	onPress: () => void;
	disabled?: boolean;
}

const DefaultBtn = (props: Props) => {
	return (
		<TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
			<Text>{props.name}</Text>
		</TouchableOpacity>
	);
};

export default DefaultBtn;
