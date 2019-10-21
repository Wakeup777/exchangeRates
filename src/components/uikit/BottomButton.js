import React from 'react';
import {Button, View} from 'react-native';

const BottomButton = ({ColorHolder}) => {
  return (
    <View
      style={{
        backgroundColor: ColorHolder,
        flex: 1,
        justifyContent: 'flex-start',
      }}>
      <Button
        title={'Refresh now'}
        large
        color="#c1ecf4"

				onPress={this.reFresh}
      />
    </View>
  );
};

export {BottomButton};
