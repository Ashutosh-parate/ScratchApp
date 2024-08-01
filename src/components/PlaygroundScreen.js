import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { executeAction } from '../utils/actions';

const PlaygroundScreen = ({ route }) => {
  const { actions } = route.params || {};
  const [sprite, setSprite] = useState({
    x: 0,
    y: 0,
    rotation: 0,
    size: 100,
    message: '',
  });

  const handleReset = () => {
    setSprite({
      x: 0,
      y: 0,
      rotation: 0,
      size: 100,
      message: '',
    });
  };

  const handleStart = () => {
    if (actions && actions.length) {
      const newSprite = { ...sprite };
      actions.forEach(action => {
        executeAction(action, newSprite);
      });
      setSprite(newSprite);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Playground</Text>
      <View
        style={[
          styles.spriteContainer,
          {
            left: sprite.x,
            top: sprite.y,
            transform: [{ rotate: `${sprite.rotation}deg` }],
            width: sprite.size,
            height: sprite.size,
          },
        ]}
      >
        <Image
          source={{ uri: 'https://test.scratch-wiki.info/wiki/File:ScratchCat.svg' }}
          style={styles.sprite}
        />
        {sprite.message ? <Text style={styles.message}>{sprite.message}</Text> : null}
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.startButton} onPress={handleStart}>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'relative',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  spriteContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sprite: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  message: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    color: 'black',
    fontSize: 16,
  },
  resetButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'lightgrey',
    padding: 10,
  },
  startButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'lightgrey',
    padding: 10,
  },
});

export default PlaygroundScreen;
