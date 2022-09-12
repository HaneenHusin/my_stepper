import {Box, Checkbox, Image} from "@chakra-ui/react";
import React from "react";

// @ts-ignore
function ImageItem({photo, isChecked, onSelect}) {

    return (<Box height='40px' pt={'70px'}>

        <Image src={photo.Image}/>
        <Checkbox
            // isChecked={isChecked}
            onChange={(e) => onSelect(e.target.checked, photo)}
        >
            {photo.id}
        </Checkbox>
    </Box>)

}

export default ImageItem