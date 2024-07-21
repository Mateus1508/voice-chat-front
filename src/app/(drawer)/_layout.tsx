import 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from '../../components/customDrawerContent';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
const DrawerRoutesLayout = () => {
	return (
		<GestureHandlerRootView className="flex-1">
			<Drawer
				drawerContent={CustomDrawerContent}
				screenOptions={{
					headerTitleAlign: 'center',
					drawerActiveBackgroundColor: '#ffffff',
					drawerActiveTintColor: '#011627',
					drawerInactiveTintColor: '#ffffff',
					drawerStyle: {
						flex: 1,
						height: '100%',
						width: 240,
						backgroundColor: '#011627',
					},
				}}
			>
				<Drawer.Screen
					name="home"
					options={{
						drawerLabel: 'Início',
						title: 'Início',
						drawerIcon: ({ size, color }) => (
							<Entypo name="home" size={size} color={color} />
						),
					}}
				/>
				<Drawer.Screen
					name="chat"
					options={{
						drawerLabel: 'Chat',
						title: 'Chat',
						drawerIcon: ({ size, color }) => (
							<Entypo name="chat" size={size} color={color} />
						),
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
};

export default DrawerRoutesLayout;
