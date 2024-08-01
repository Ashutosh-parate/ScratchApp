import React from 'react';
import { View, Text, Linking, TouchableOpacity, StyleSheet } from 'react-native';

const SpriteLink = () => {
  const openLink = () => {
    Linking.openURL('https://test.scratch-wiki.info/wiki/Eng:Scratch_Cat');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openLink}>
        <Text style={styles.link}>Sprite Link: Scratch Cat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default SpriteLink;
