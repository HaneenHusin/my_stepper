
import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        body: 'Poppins, sans-serif',
    },
    colors: {
        brand: {
            orange: "#FF8C1E",
            gray: "#434E61",
            hoverorange:"#FF6C1E",
            hovergray:"#262626",
            lightgray:"#b3b3b3",
            lightgrayselect:"#F6F6F6",
            darkgray:"#262626"
        },
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'normal',
                textColor: '#ffff',
                width: '300px',


            },

            variants: {


                sm: {
                    bg: '#FF8C1E',
                    fontSize: 'md',
                    _hover:{ bg: '#FF6C1E'},
                },
            },
            defaultProps: {
                size: 'lg',
                variant: 'sm',
                colorScheme: '#FF6C1E',
            },
        },
        Select: {
            baseStyle: {
                field: {
                    color: '#434E61',
                    bg:'#F6F6F6',
                },
                icon: {
                    fontSize: '2xl',
                },
                colorScheme:{color: '#B3B3B3'},

            },
        },
    },


});


export default theme;