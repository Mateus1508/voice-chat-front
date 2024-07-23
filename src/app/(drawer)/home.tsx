import { Image, Text, View } from 'react-native';
import IconButton from '../../components/iconButon';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
const Home = () => {
	const router = useRouter();
	return (
		<View className="bg-slate-900 flex-1 w-full justify-center items-center">
			<Image
				className="w-48 h-48 mb-5"
				source={require('../../../assets/favicon.png')}
				alt="img"
			/>
			<View className="my-5 items-center px-8">
				<Text className="text-3xl text-white">AI Talk</Text>
				<Text className="text-mb text-white my-3">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Praesentium nostrum sed, voluptatem beatae consequuntur
					expedita modi eveniet est delectus magnam.
				</Text>
			</View>
			<IconButton
				name="Iniciar nova conversa"
				onPress={() => router.replace('/chat')}
				icon={
					<MaterialIcons
						name="keyboard-voice"
						size={24}
						color="white"
					/>
				}
				border
			/>
		</View>
	);
};

export default Home;
