'use client'
import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { CreditCardIcon, AtSignIcon, LocationIcon } from '@chakra-ui/icons';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    cardExp: '',
    cardCvc: '',
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would integrate the payment gateway logic (e.g., Stripe)
    toast({
      title: 'Payment Successful',
      description: 'Thank you for your purchase!',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

    // Reset the form
    setFormData({
      fullName: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      cardNumber: '',
      cardExp: '',
      cardCvc: '',
    });
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" maxWidth="500px" mx="auto" rounded="lg">
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          Payment Form
        </Text>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="fullName">Full Name</FormLabel>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                isRequired
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<AtSignIcon />} />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  isRequired
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="address">Billing Address</FormLabel>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main St"
                isRequired
              />
            </FormControl>

            <Stack direction="row" spacing={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="city">City</FormLabel>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  isRequired
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="state">State</FormLabel>
                <Input
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  isRequired
                />
              </FormControl>
            </Stack>

            <FormControl isRequired>
              <FormLabel htmlFor="zip">ZIP Code</FormLabel>
              <Input
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="Zip Code"
                isRequired
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
              <Input
                id="cardNumber"
                name="cardNumber"
                type="text"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9876 5432"
                isRequired
              />
            </FormControl>

            <Stack direction="row" spacing={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="cardExp">Expiration Date</FormLabel>
                <Input
                  id="cardExp"
                  name="cardExp"
                  type="text"
                  value={formData.cardExp}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  isRequired
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="cardCvc">CVC</FormLabel>
                <Input
                  id="cardCvc"
                  name="cardCvc"
                  type="text"
                  value={formData.cardCvc}
                  onChange={handleChange}
                  placeholder="CVC"
                  isRequired
                />
              </FormControl>
            </Stack>

            <Button type="submit" colorScheme="teal" width="full">
              Pay Now
            </Button>
          </Stack>
        </form>
      </VStack>
    </Box>
  );
};

export default PaymentForm;
