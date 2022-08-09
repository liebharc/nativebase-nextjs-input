import React, { useState } from 'react';
import { Center, Heading, VStack, Button, Input, Modal } from 'native-base';

// Start editing here, save and see your changes.
export default function App() {
	const [showModal, setShowModal] = useState(false);
	const [value, setValue] = useState('');
	return (
		<Center
			flex={1}
			_dark={{ bg: 'blueGray.900' }}
			_light={{ bg: 'blueGray.50' }}
		>
			<VStack alignItems="center" space="md">
				<Heading>Welcome to NativeBase</Heading>
				<Input value={value} onChangeText={setValue} />
				<Modal
					isOpen={showModal}
					onClose={async () => setShowModal(false)}
					size="xl"
				>
					<Modal.Content>
						<Modal.Header>Modal</Modal.Header>
						<Modal.Body>
							<VStack>
								<Input
									placeholder="Enter a value"
									type="text"
									value={value}
									onChangeText={setValue}
								/>
							</VStack>
						</Modal.Body>
						<Modal.Footer>
							<Button.Group space={2}>
								<Button
									variant="ghost"
									colorScheme="blueGray"
									onPress={() => {
										setShowModal(false);
									}}
								>
									Close Modal
								</Button>
							</Button.Group>
						</Modal.Footer>
					</Modal.Content>
				</Modal>
				<Button
					onPress={() => {
						setShowModal(true);
					}}
				>
					Show Modal
				</Button>
			</VStack>
		</Center>
	);
}
