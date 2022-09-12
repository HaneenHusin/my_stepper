import {useRecoilState, useRecoilValue} from "recoil";
import {Button, Center, Radio, RadioGroup, Stack, VStack, Flex} from "@chakra-ui/react";
import React from "react";
import {myStepperState} from "../atoms/MyStepperAtom";

// @ts-ignore
function MyStepper({children}) {
    const [myState, setMyState] = useRecoilState(myStepperState);

    let onBackPressed = () => {
        setMyState({
            ...myState,
            page: myState.page - 1

        });
    }

    let onForwardPressed = () => {
        setMyState({
            ...myState,
            page: myState.page + 1,
            forward: false
        });

    }

    return (
        <>
            <div>
                {children[myState.page]}

                <Center pt={'100px'}>
                    <VStack>
                        <Button
                            onClick={onForwardPressed}
                            hidden={myState.page === 3}
                            disabled={!myState.forward}
                            _hover={{bg: "brand.hoverorange"}}
                        >
                            {myState.forwardText}
                        </Button>
                        <Button
                            onClick={onBackPressed}
                            hidden={myState.page === 0}
                            disabled={!myState.backward}
                            bg={'white'}
                            color={'brand.hovergray'}
                            _hover={{bg: 'brand.hovergray', color: 'white'}}
                        >
                            {myState.backwardText}
                        </Button>
                    </VStack>
                </Center>
                <Flex
                    w="full"
                    minHeight="20vh"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <RadioGroup value={`${myState.page}`} defaultValue='0'>
                        <Stack direction='row'>
                            <Radio isInvalid value='0' colorScheme='orange'></Radio>
                            <Radio isInvalid value='1' colorScheme='orange'></Radio>
                            <Radio isInvalid value='2' colorScheme='orange'></Radio>
                        </Stack>
                    </RadioGroup>
                </Flex>
            </div>

        </>
    )
}

export default MyStepper;