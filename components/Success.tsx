import React from "react";
import  {Box, Center, Text, VStack,Icon} from "@chakra-ui/react";
import {CheckIcon} from "@chakra-ui/icons";


function Success() {

    return (
        <Box
            bg='brand.gray'
            bg-cover
            h='calc(35vh)'
            borderRadius={30}
        >
            <Center h='calc(75vh)'>
                <VStack>
                    <Text color={"brand.orange"} fontSize='4xl' font-black>
                        SUCCESS !!!!
                    </Text>
                    <Icon as={CheckIcon} w={8} h={8} color='brand.orange' pt={'28px'}/>
                    <Text color={"brand.gray"} fontSize='xl' font-black>
                        you did it
                    </Text>
                    <Text color={"brand.lightgray"} fontSize='md' font-black>
                        Congratulations! Registration has been completed
                    </Text>
                </VStack>
            </Center>


        </Box>
    );
}

export default Success