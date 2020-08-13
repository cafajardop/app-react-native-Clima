import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native'; //TODO Animaciones ingresamos Animaded
import { Picker } from '@react-native-community/picker' //TODO Instalar picker npm i @react-native-community/picker

const Formulario = () => {
    const [animacionboton] = useState(new Animated.Value(1));
    const animacionEntrada = () => {
        Animated.spring(animacionboton, {
            toValue: .75,
            useNativeDriver: true
        }).start();
    }
    const animacionSalida = () => {
        Animated.spring(animacionboton, {
            toValue: 1,
            friction:1,
            tension: 30,
            useNativeDriver: true
        }).start();
    }

    const estiloAnimacion = {
        transform: [{ scale: animacionboton }]
    }

    return (
        <>
            <View style={styles.formulario}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="City"
                        placeholderTextColor="#666"
                    />
                </View>
                <View>
                    <Picker
                        itemStyle={{ height: 120, backgroundColor: '#FFF' }}
                    >
                        <Picker.Item label="-- Seleccione un país --" value="" />
                        <Picker.Item label="Estados Unidos" value="US" />
                        <Picker.Item label="México" value="MX" />
                        <Picker.Item label="Argentina" value="AR" />
                        <Picker.Item label="Colombia" value="CO" />
                        <Picker.Item label="Costa Rica" value="CR" />
                        <Picker.Item label="España" value="ES" />
                        <Picker.Item label="Perú" value="PE" />
                    </Picker>
                </View>
                <TouchableWithoutFeedback
                    onPressIn={() => animacionEntrada()}
                    onPressOut={() => animacionSalida()}
                >
                    <Animated.View
                        style={[styles.btnBuscar, estiloAnimacion]}
                    >
                        <Text style={styles.textoBuscar}>Buscar Clima</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        height: 50, /* ALTO */
        backgroundColor: '#FFF', /* COLOR DE FONDO */
        fontSize: 20, /* TAMAMÑO DE LA LETRA */
        marginBottom: 20,  /* ESPACIO CONTRA LA CAJA DE ABAJO */
        textAlign: 'center' /* TODO LO QUE ESCRIBO QUEDA CENTRADO */
    },
    btnBuscar: {
        marginTop: 50,
        backgroundColor: '#000',
        padding: 10,
        justifyContent: 'center'
    },
    textoBuscar: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 18
    }
})

export default Formulario;