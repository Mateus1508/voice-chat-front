import { useRouter } from 'expo-router';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import DefaultBtn from '../components/defaultButton';
import DefaultInput from '../components/defaultInput';
import { FontAwesome } from '@expo/vector-icons';
import IconButton from '../components/iconButon';

const SignUp = () => {
	const router = useRouter();
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			className="bg-slate-900"
		>
			<View className="flex h-full w-full px-5 justify-center items-center">
				<Text className="text-4xl text-white font-bold">
					Crie sua conta
				</Text>
				<Text className="text-white mb-5">
					E aproveite todos os nossos recursos
				</Text>

				<View className="w-full">
					<DefaultInput placeholder="Nome" />
					<DefaultInput placeholder="Email" />
					<DefaultInput placeholder="Senha" secureTextEntry />
					<DefaultInput
						placeholder="Confirmar senha"
						secureTextEntry
						className="mb-4"
					/>
					<DefaultBtn
						name="Criar"
						onPress={() => router.replace('/home')}
					/>
				</View>
				<View className="w-full">
					<Text className="text-white text-center my-5">
						Ou criar com
					</Text>
					<View className="w-full flex-row justify-center">
						<IconButton
							name="Crie com o Google"
							fullWidth
							border
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
					Já possui uma conta?{' '}
					<Text
						className="text-blue-300"
						onPress={() => router.replace('signIn')}
					>
						Clique para entrar
					</Text>
				</Text>
			</View>
		</KeyboardAvoidingView>
	);
};

export default SignUp;
