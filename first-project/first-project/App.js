import {useState} from 'react';
import {View, Text, ImageBackground, ScrollView, TextInput, StyleSheet, Button, Alert, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import MyCat from "./assets/falls.jpg"

type Props = {
  name: string;
};

const PropsFunctionwButton = (props: Props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text style={styles.text}>
        I am {props.name}, and I am {isHungry ? 'happy' : 'sad'}!
      </Text>
      <Button
        onPress={() => { isHungry ? setIsHungry(false) : setIsHungry(true); }}
        title={isHungry ? 'yes!' : 'no!'}
        color='pink'
        style={{ height: 10, width: 10 }} 
      />
    </View>
  );
}

const PropsFunction = (props: Props) => {
  return (
    <View>
      <Text style={styles.text}> I am string {props.name}</Text>
    </View>
  );
}

const LetterCounter = () => {
  const [text, setText] = useState(''); 
  return (
    <View>
      <TextInput
        style={{fontSize: 30, padding: 5}}
        placeholder="Letter counter per word"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word.length)
          .join(' ')}
      </Text>
    </View>
  );
}

const App = () => {

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView style={styles.container}>   
          <ImageBackground
          source={MyCat}
          style={styles.image}
          >
            <View style={styles.container}>
              <Text> Sameple of a basic text </Text>
              
              <TextInput
                style={styles.outerText}
                defaultValue="Basic Input text"/>

              <Button
                onPress={() => Alert.alert("This App is to make you happy")}
                title="Help"
                color="#055018"
                style={{height: 10, width: 5 }}/>
               

              <PropsFunction name="Properties function"/>
              
              <Image 
              src={'https://media.istockphoto.com/id/1357101370/photo/cat-ashen-with-assault-rifle-in-wood.jpg?s=612x612&w=0&k=20&c=hKpLNq-lfPmlYIGyhumKWA4j7OQg3lyt-LvqS6BZuFo='}
              style={styles.imageInside}
              />

	            <Text style={styles.textTitle}>Marie!</Text>

              <PropsFunctionwButton name="Juniper" />
              <PropsFunctionwButton name="Lilo" />

              <LetterCounter />

            </View>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};




export default App;

const styles = StyleSheet.create({
  container:{
    height: 900,
    width: 500,
  },
  imageStyle: {
    borderRadius: 10,
  },
  imageInside:{
    height: 100,
    width: 100,
  },
  text: {
    fontSize: 25,
  },
  textTitle: {
    color: 'grey',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  outerText:{
    fontSize: 30,
    borderColor: 'pink',
    borderWidth: 4,
  }
 
});
