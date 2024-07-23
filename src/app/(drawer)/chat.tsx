import { Text, View } from 'react-native';
import ChatInput from '../../components/chatInput';
import TalkingAnimation from '../../components/animations.tsx/talkingAnimation';
import TypingAnimation from '../../components/animations.tsx/typingAnimation';
const Chat = () => {
	return (
		<View className="bg-slate-900 flex h-full w-full">
			<View className="flex-1 mt-3 mx-2 justify-end items-center">
				<TalkingAnimation />
			</View>
			<TypingAnimation text="Essas alterações proporcionam um efeito de pulsar no ícone e no fundo, criando uma interação visual mais atraente quando o botão é ativado. Ajuste os valores e a duração das animações conforme necessário para alcançar o efeito visual desejado." />
			<ChatInput />
		</View>
	);
};

export default Chat;
