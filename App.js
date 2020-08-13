import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Formulario from './components/Formulario'


const App = () => {
  /* SIRVE PARA OCULTAR EL TECLADO Y LUEGO LLAMAR LA FUNCION CON DISMISS TouchableWithoutFeedback*/
  const ocultarTeclado = () => {
    Keyboard.dismiss();
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
        <View style={styles.app}>
          <View style={styles.contenido}>
            <Formulario />

          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1, /*CRECE TODO EL ESPACIO DISPONIBLE */
    backgroundColor: 'rgb(71,149,212)',
    justifyContent: 'center', /* PARA QUE SE CENTRE EL CONTENIDO Y NO QUEDE TAN ARRIBA Y QUEDA EN EL CENTRO DE LA PANTALLA*/
  },
  contenido: {
    marginHorizontal: '2.5%' /* SEPARA DE LOS LADOS  */
  }
});

export default App;