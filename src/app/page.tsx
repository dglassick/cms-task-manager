'use client'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'

export default function Home() {
	return (
		<Flex
			align="center"
			justify="center"
			h={'100%'}
		>
			<Box textAlign="center">
				<Heading fontSize="4xl" mb="4">
					Your Project Management App
				</Heading>
				<Text fontSize="lg" mb="8">
					Organize tasks, collaborate with your team, and get things done efficiently.
				</Text>
				<Button
					colorScheme="teal"
					size="lg"
					onClick={() => {
						// Handle redirection to your app's main page
						console.log('Redirect to the app!');
					}}
				>
					Get Started
				</Button>
			</Box>
		</Flex>
	)
}
