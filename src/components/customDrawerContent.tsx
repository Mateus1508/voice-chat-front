import {
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList,
} from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { Image, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CustomDrawerContent = (props: any) => {
	const router = useRouter();
	return (
		<View className="flex-1">
			<DrawerContentScrollView {...props} scrollEnabled={false}>
				<View className="w-full items-center border-b py-5 mb-5 border-gray-600">
					<Image
						className="w-24 h-24 rounded-full border-4 border-green-500 p-1"
						source={{ uri: 'https://github.com/Mateus1508.png' }}
					/>
					<Text className="text-lg mt-3 font-bold text-white">
						Mateus
					</Text>
				</View>
				<DrawerItemList {...props} />
			</DrawerContentScrollView>
			<View className="py-2 border-t border-gray-600">
				<DrawerItem
					label={'Sair'}
					onPress={() => router.replace('/')}
					icon={({ color, size }) => (
						<Feather name="log-out" color={color} size={size} />
					)}
					inactiveTintColor="#ffffff"
				/>
			</View>
		</View>
	);
};

export default CustomDrawerContent;
