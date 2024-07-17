import { Text, TextInput, View } from 'react-native';
import DefaultBtn from '../components/button';
import { useRouter } from 'expo-router';

const Login = () => {
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

export default Login;
