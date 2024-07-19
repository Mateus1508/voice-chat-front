import { useRouter } from 'expo-router';
import { View, TextInput, Text } from 'react-native';
import DefaultBtn from '../components/button';

const SignIn = () => {
	const router = useRouter();

	return (
		<View className="flex h-full w-full justify-center items-center">
			<Text>Realize o login</Text>
			<TextInput placeholder="Email" />
			<TextInput placeholder="Senha" secureTextEntry />
			<DefaultBtn name="Entrar" onPress={() => router.replace('/home')} />
			<Text>Não possui uma conta?</Text>
		</View>
	);
};

export default SignIn;
