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
        if (myState.page < children.length - 1) {
            setMyState({
                ...myState,
                page: myState.page + 1,
                forward: false
            });
        }

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
                            _hover={{bg: '#FF6C1E'}}
                        >
                            {myState.forwardText}
                        </Button>
                        <Button
                            onClick={onBackPressed}
                            hidden={myState.page === 0 ||myState.page === 3}
                            disabled={!myState.backward}
                            bg={'#ffff'}
                            color={'#262626'}
                            _hover={{bg: '#7b7a7e', color: '#ffff'}}
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
                            {children.map((val, index) => (
                                <Radio isInvalid value={`${index}`} colorScheme='orange'></Radio>
                            ))}

                        </Stack>
                    </RadioGroup>
                </Flex>
            </div>

        </>
    )
}

export default MyStepper;