import React from 'react'
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {useTranslation} from "react-i18next";
import useThemeColors from "@Hooks/useThemeColors";

type FallbackComponentProps = {
    error: Error;
    resetError: () => void
}

const FallbackComponent = (props: FallbackComponentProps) => {

    const i18n = useTranslation()
    const COLORS = useThemeColors()

    return (
        <SafeAreaView style={[
            styles.container, {
                backgroundColor: COLORS.background
            }]}
        >
            <View style={styles.content}>
                <Text style={[
                    styles.title,
                    {
                        color: COLORS.text.primary
                    }
                ]}>{i18n.t('fallback.title')}</Text>
                <Text style={[
                    styles.subtitle,
                    {
                        color: COLORS.text.primary
                    }
                ]}>{i18n.t('screens.subtitle')}</Text>
                <Text style={[
                    styles.error,
                    {
                        color: COLORS.text.primary
                    }
                ]}>{props.error.toString()}</Text>
                <TouchableOpacity style={[
                    styles.button,
                    {
                        backgroundColor: COLORS.buttons.primary.background
                    }
                ]} onPress={props.resetError}>
                    <Text style={[
                        styles.buttonText,
                        {
                            color: COLORS.buttons.primary.text
                        }
                    ]}>{i18n.t('screens.reset')}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        marginHorizontal: 16,
    },
    title: {
        fontSize: 48,
        fontWeight: '300',
        paddingBottom: 16,
    },
    subtitle: {
        fontSize: 32,
        fontWeight: '800',
    },
    error: {
        marginVertical: 8,
        padding: 8,
        backgroundColor: 'rgba(131,131,131,0.1)',
    },
    button: {
        borderRadius: 50,
        padding: 16,
    },
    buttonText: {
        fontWeight: '600',
        textAlign: 'center',
    },
})

export default FallbackComponent
