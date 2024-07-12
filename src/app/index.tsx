import { Link } from 'expo-router';
import { Button, Text, View } from 'react-native';

const Login = () => {
	return (
		<View className="flex h-full w-full justify-center items-center">
			<Text>Login</Text>
			<Link href="/home" asChild>
				<Button title="Entrar" />
			</Link>
		</View>
	);
};

export default Login;
