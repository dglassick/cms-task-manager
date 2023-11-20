import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import useColorMode from '../../hooks/useColorMode';
import { useColorMode as useChakraColorMode } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';


const DarkModeSwitcher = () => {
    const [tailwindColorMode, setTailwindColorMode] = useColorMode();
    const { toggleColorMode } = useChakraColorMode();

    return (
        <Button onClick={() => {
            if (typeof setTailwindColorMode === 'function') {
                setTailwindColorMode(tailwindColorMode === 'light' ? 'dark' : 'light');
                toggleColorMode()
            }
        }}
        >
            {tailwindColorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
    );
};

export default DarkModeSwitcher;