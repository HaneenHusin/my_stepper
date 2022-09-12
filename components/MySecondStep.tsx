import React from "react";
import {useRecoilState} from "recoil";
import {formInputState, formStepState} from "../atoms/StepperAtoms";
import {myStepperState} from "../atoms/MyStepperAtom";
import {VStack, Text, Select} from "@chakra-ui/react";


function MySecondStep() {
    const [form, setForm] = useRecoilState(formInputState);
    const [stepperState, setStepperState] = useRecoilState(myStepperState);
    let validCountry = false
    let validLanguage = false

    function onCountryTextChanged(e) {
        setForm({
            ...form,
            country: e.target.value,
        });
        validCountry = e.target.value !== ''
        validLanguage = form.language !== '';
        setStepperState({...stepperState, forward: (validCountry && validLanguage), backward: true})

    }

    function onLanguageTextChanged(e) {
        setForm({
            ...form,
            language: e.target.value,
        });
        validLanguage = e.target.value !== ''
        validCountry = form.country !== '';
        setStepperState({...stepperState, forward: (validCountry && validLanguage), backward: true})

    }

    return (
        <>
            <VStack>
                <Text color={"brand.gray"} font-extrabold fontSize={'28px'} textAlign='center' pb={'28px'}>
                    Pick your language and country/region
                </Text>
                <Select bg={'brand.lightgrayselect'} focusBorderColor={'brand.orange'}
                        className="chakra-react-select"
                        onChange={onCountryTextChanged}
                        value={form.country}
                        width={'300px'}
                        variant='outline'
                        placeholder={'Enter your Country'}
                        color={"brand.gray"}

                >
                    <option value='Yemen'>Yemen</option>
                    <option value='Vietnam'>Vietnam</option>
                    <option value='Dubai'>Dubai</option>
                </Select>
                <Select bg={'brand.lightgrayselect'} focusBorderColor={'brand.orange'}
                        className="chakra-react-select "
                        width={'300px'}
                        variant='outline'
                        placeholder={'Enter your Language'}
                        onChange={onLanguageTextChanged}
                        value={form.language}
                        color={"brand.gray"}
                >

                    <option value='Arabic'>Arabic</option>
                    <option value='English'>English</option>
                </Select>
            </VStack>
        </>
    );
}

export default MySecondStep