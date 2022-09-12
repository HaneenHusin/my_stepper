import React from "react";
import {useRecoilState} from "recoil";
import {formInputState, formStepState} from "../atoms/StepperAtoms";
import { Text, SimpleGrid, Center} from '@chakra-ui/react';
import {Photos} from "../constant/data";
import ImageItem from "./ImageItem";
import {myStepperState} from "../atoms/MyStepperAtom";

function ThirdStep() {
    const [form, setForm] = useRecoilState(formInputState);
    const [stepperState, setStepperState] = useRecoilState(myStepperState);

    function onImageSelect(isChecked, photo) {
        let array = [...form.picId]
        if (isChecked) {
            array.push([photo.id])

        } else {
            array.pop(photo.id)

        }
        setForm({...form, picId: array})
        setStepperState({...stepperState, forward: (array.length >= 3), backward: true})
    }


    function isImageSelected(photo) {
        return form.picId.indexOf(photo.id) > -1
    }

    return (
        <div>
            <Text
                color='brand.gray'
                font-extrabold
                fontSize={'28px'}
                textAlign='center'
                pb={'28px'}
            >
                Tell us what you’re interested in
            </Text>

            <Center pb={'28px'}>
                <SimpleGrid spacing='60px' columns={4} h={'200px'}>
                    {Photos.map((photo) => (
                        <ImageItem photo={photo} onSelect={onImageSelect} isChecked={isImageSelected(photo)}/>

                    ))}
                </SimpleGrid>
            </Center>
        </div>
    );
}

export default ThirdStep