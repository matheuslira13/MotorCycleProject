import { Pressable, Text } from 'react-native';
import { styles } from './styles';
import { useLogin } from '../../hooks';


export function LoginButton() {

  const { gotoNextScreen } = useLogin()

  return (
      <Pressable style={styles.button} onPress={gotoNextScreen}>
        <Text style={styles.textButton}>Log In</Text>
      </Pressable>
  );
}