import { useRouter } from 'expo-router';
import {
	KeyboardAvoidingView,
	Platform,
	Text,
	View,
	Image,
	TouchableOpacity,
} from 'react-native';
import DefaultBtn from '../components/defaultButton';
import DefaultInput from '../components/defaultInput';
import { FontAwesome } from '@expo/vector-icons';
import IconButton from '../components/iconButon';

const SignIn = () => {
	const router = useRouter();
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			className="bg-slate-900"
		>
			<View className="flex h-full w-full px-5 justify-center items-center">
				<Text className="text-4xl text-white font-bold">Entre</Text>
				<Text className="text-white mt-1 mb-8">
					E aproveite todos os nossos recursos
				</Text>

				<View className="w-full">
					<DefaultInput placeholder="Email" />
					<DefaultInput placeholder="Senha" secureTextEntry />
					<Text className="text-white text-md font-bold mb-4">
						<Text
							className="text-blue-300"
							onPress={() => router.replace('signUp')}
						>
							Esqueci minha senha
						</Text>
					</Text>
					<DefaultBtn
						name="Entrar"
						onPress={() => router.replace('/home')}
					/>
				</View>
				<View className="w-full">
					<Text className="text-white text-center my-5">Ou</Text>
					<View className="w-full flex-row justify-center">
						<IconButton
							name="Entre com o Google"
							fullWidth
							icon={
								<FontAwesome
									name="google"
									size={32}
									color="#FFFFFF"
								/>
							}
						/>
					</View>
				</View>
				<Text className="text-white text-md font-bold mt-8">
					Ainda não possui uma conta?{' '}
					<Text
						className="text-blue-300"
						onPress={() => router.replace('signUp')}
					>
						Clique para criar
					</Text>
				</Text>
			</View>
		</KeyboardAvoidingView>
	);
};

export default SignIn;
