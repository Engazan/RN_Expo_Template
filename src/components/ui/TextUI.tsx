import React from "react";
import {useTranslation} from "react-i18next";
import {Text} from "react-native";
import useThemeColors from "@Hooks/useThemeColors";

interface TextUIProps {
    textIsTranslationKey?: boolean
    text: string
    style?: Text['props']['style']
}

const TextUI: React.FC<TextUIProps> = (props) => {

    const COLORS = useThemeColors();
    const i18n = useTranslation();

    return (
        <Text
            style={[
                {
                    color: COLORS.text.primary,
                },
                props.style
            ]}
        >{props.textIsTranslationKey ? i18n.t(props.text) : props.text}</Text>
    )
}

export default TextUI;
