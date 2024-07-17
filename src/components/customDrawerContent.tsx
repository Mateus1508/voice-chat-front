import {
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList,
} from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CustomDrawerContent = (props: any) => {
	const router = useRouter();
	return (
		<View className="flex-1">
			<DrawerContentScrollView {...props}>
				<DrawerItemList {...props} />
			</DrawerContentScrollView>
			<View className="py-2 border-t border-gray-800">
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
