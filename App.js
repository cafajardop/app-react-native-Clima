import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, ScrollView, View, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Formulario from './components/Formulario'
import Clima from './components/Clima'


const App = () => {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  })

  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [bgcolor, guardarBgcolor] = useState('rgb(71,149,212)');

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarClima = async () => {
      if (consultar) {
        const appId = 'aab78986d9031019c503731b2286b750'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          guardarResultado(resultado);
          guardarConsultar(false);

          // Modifica los colores fondo basado en la temperatura 
          const kelvin = 273.15;
          const { main } = resultado;
          const actual = main.temp - kelvin;

          if (actual < 10) {
            guardarBgcolor('rgb(105, 108, 149)')
          } else if (actual >= 10 && actual < 25) {
            guardarBgcolor('rgb(71,149,212)')
          } else {
            guardarBgcolor('rgb(178, 28, 61)')
          }

        } catch (error) {
          mostrarAlerta();
        }
      }
    }
    consultarClima();
  }, [consultar])

  const mostrarAlerta = () => {
    Alert.alert(
      'Error',
      'No hay resultados, intenta con otra ciudad o país',
      [{ text: 'Ok' }]
    )
  }


  /* SIRVE PARA OCULTAR EL TECLADO Y LUEGO LLAMAR LA FUNCION CON DISMISS TouchableWithoutFeedback*/
  const ocultarTeclado = () => {
    Keyboard.dismiss();
  }

  const bgColorApp = {
    backgroundColor: bgcolor
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
        <View style={[styles.app, bgColorApp]}>
          <View style={styles.contenido}>
            <Clima
              resultado={resultado}
            />
            <Formulario
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsultar={guardarConsultar}
            />

          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1, /*CRECE TODO EL ESPACIO DISPONIBLE */
    justifyContent: 'center', /* PARA QUE SE CENTRE EL CONTENIDO Y NO QUEDE TAN ARRIBA Y QUEDA EN EL CENTRO DE LA PANTALLA*/
  },
  contenido: {
    marginHorizontal: '2.5%' /* SEPARA DE LOS LADOS  */
  }
});

export default App;