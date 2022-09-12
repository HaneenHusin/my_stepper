import {
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    VStack,
    Text,
    Avatar
} from "@chakra-ui/react";
import React from "react";
import {useRecoilState} from "recoil";
import {formInputState, formStepState} from "../atoms/StepperAtoms";
import {EditIcon} from "@chakra-ui/icons";
import {myStepperState} from "../atoms/MyStepperAtom";

function MyFirstStep() {
    const [form, setForm] = useRecoilState(formInputState);
    const [stepperState, setStepperState] = useRecoilState(myStepperState);

    function onTextChanged(e) {
        setForm({
            ...form,
            name: e.target.value,
        });
        setStepperState({...stepperState, forward: e.target.value !== '', backward: true})

    }

    return (

        <VStack>
            <Avatar size='2xl' bg={"brand.gray"} borderRadius={8} name={form.name}/>{' '}
            <Text color='brand.lightgray' fontSize='sm'>
                alice@wonderland.space
            </Text>
            <Text color={"brand.gray"} fontSize='2xl'>
                Welcome to Giki
            </Text>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    color={"brand.gray"}
                    fontSize='1.2em'
                />
                <Input placeholder='Enter Name' defaultValue={form.name} onChange={onTextChanged}/>
                <InputRightElement children={<EditIcon color={"brand.gray"}/>}/>
            </InputGroup>
            <Text color='brand.darkgray' fontSize='l' textAlign='center'>
                Your answers to the next few questions will help us find the right
                communities for you
            </Text>
        </VStack>
    );
}

export default MyFirstStep