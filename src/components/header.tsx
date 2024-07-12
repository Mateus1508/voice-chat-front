import { Pressable, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';

const Header = () => {
	const navigation = useNavigation();
	const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer());
	return (
		<View className="w-full items-end py-3 pr-4">
			<Pressable onPress={toggleMenu}>
				<Entypo name="menu" size={32} color="black" />
			</Pressable>
		</View>
	);
};

export default Header;
