import useColorScheme from './useColorScheme';
import COLORS from "../helpers/COLORS";

const useThemeColors = () => {
    const colorScheme = useColorScheme()

    return COLORS[colorScheme]
}

export default useThemeColors
