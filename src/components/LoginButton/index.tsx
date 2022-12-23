import { Pressable, Text } from 'react-native';
import { styles } from './styles';

type ButtonProps = {
  name: string
  onPress: () => void
}

export function LoginButton({name, onPress}: ButtonProps) {

  return (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.textButton}>{name}</Text>
      </Pressable>
  );
}