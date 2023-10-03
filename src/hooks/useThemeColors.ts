import useColorScheme from "@Hooks/useColorScheme";
import COLORS from "@Helpers/COLORS";

const useThemeColors = () => {
    const colorScheme = useColorScheme()

    return COLORS[colorScheme]
}

export default useThemeColors
