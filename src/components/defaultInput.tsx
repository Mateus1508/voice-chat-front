import { TextInput, TextInputProps } from 'react-native';

const DefaultInput = (props: TextInputProps) => {
	return (
		<TextInput
			{...props}
			placeholderTextColor="#ffffff"
			className="border w-full my-2 bg-slate-800 rounded-md border-slate-700 text-lg text-white p-3"
		/>
	);
};

export default DefaultInput;
