import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Button, Text, View} from 'react-native';


//COMMON
import STRINGS from '../../common/strings/strings';
import COMMON_STYLES from '../../common/styles/styles';
import COLORS from '../../common/colors/colors';

export default function Home({navigation}) {

  return (
    <View style={COMMON_STYLES.mainContainer}>
      
        <Text style={COMMON_STYLES.headerText}>{STRINGS.homePage}</Text>
        <View style={COMMON_STYLES.buttonContainer}>
       
              <Button style={COMMON_STYLES.button} title="Farmer"
              onPress={() => navigation.navigate('../auth/register/FarmerRegistration')}/>
              <Button style={COMMON_STYLES.button} title="Assistant"
              onPress={() => navigation.navigate('../auth/register/FarmerRegistration')}/>
              <Button style={COMMON_STYLES.button} title="Transporter"
              onPress={() => navigation.navigate('../auth/register/FarmerRegistration')}/>
          </View>
      
    </View>
  );
}

