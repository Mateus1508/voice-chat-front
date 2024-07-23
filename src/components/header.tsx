import { Pressable, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRouter } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import React from 'react';

const Header = () => {
	const router = useRouter();
	const navigation = useNavigation();
	const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer());
	return (
		<View className="w-full items-center">
			<View className="w-full absolute justify-between items-center flex-row p-4">
				<Pressable onPress={() => router.push('/home')}>
					<AntDesign name="arrowleft" size={32} color="white" />
				</Pressable>
				<Text className="text-white text-lg">Talking to AI</Text>
				<Pressable onPress={toggleMenu}>
					<AntDesign name="menu-unfold" size={32} color="white" />
				</Pressable>
			</View>
		</View>
	);
};

export default Header;
