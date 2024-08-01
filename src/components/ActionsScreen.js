import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import SpriteLink from './SpriteLink';

const ActionsScreen = ({ navigation }) => {
  const [actionQueue, setActionQueue] = useState([]);

  const handleAction = (action) => {
    setActionQueue([...actionQueue, { type: action }]);
  };

  const handleStart = () => {
    navigation.navigate('Playground', { actions: actionQueue });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.spriteContainer}>
        <SpriteLink />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Move X by 50" onPress={() => handleAction('moveX')} />
        <Button title="Move Y by 50" onPress={() => handleAction('moveY')} />
        <Button title="Rotate 360" onPress={() => handleAction('rotate')} />
        <Button title="Go to (0,0)" onPress={() => handleAction('goTo00')} />
        <Button title="Go to Random Position" onPress={() => handleAction('goToRandom')} />
        <Button title="Say Hello for 1 sec" onPress={() => handleAction('sayHello')} />
        <Button title="Increase Size" onPress={() => handleAction('increaseSize')} />
        <Button title="Decrease Size" onPress={() => handleAction('decreaseSize')} />
        <Button title="Repeat" onPress={() => handleAction('repeat')} />
      </View>
      <Button title="Start" onPress={handleStart} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  spriteContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

export default ActionsScreen;
