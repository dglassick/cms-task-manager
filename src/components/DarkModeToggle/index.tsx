'use client'

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

const DarkModeSwitcher = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Button onClick={() => toggleColorMode()}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
    );
};

export default DarkModeSwitcher;