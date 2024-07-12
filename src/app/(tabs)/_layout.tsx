import { Drawer } from 'expo-router/drawer';
import { SafeAreaView } from 'react-native';
import Header from '../../components/header';

const DrawerRoutesLayout = () => {
	return (
		<SafeAreaView className="flex-1">
			<Header />
			<Drawer
				screenOptions={{ headerShown: false, drawerPosition: 'right' }}
			>
				<Drawer.Screen
					name="home"
					options={{
						title: 'Início',
					}}
				/>
				<Drawer.Screen
					name="chat"
					options={{
						title: 'Chat',
					}}
				/>
			</Drawer>
		</SafeAreaView>
	);
};

export default DrawerRoutesLayout;
