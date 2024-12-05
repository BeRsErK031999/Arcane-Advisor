import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import InputField from '../components/InputField';
import Button from '../components/Button';

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Вход в аккаунт</Text>
      <InputField placeholder="Введите email" />
      <InputField placeholder="Введите пароль" secureTextEntry />
      <Button title="Войти" onPress={() => console.log('Войти')} />
      <Text style={styles.link}>Забыли пароль?</Text>
      <Text style={styles.link}>Регистрация</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    fontSize: 14,
    color: '#007BFF',
    marginTop: 10,
  },
});

export default LoginScreen;
