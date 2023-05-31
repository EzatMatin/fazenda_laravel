const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            keyframes:{
             fadeDown: {
                '0%': { top: '-100%', opacity: '0' },
                '100%': { top: '0', opacity: '1'  },
              }
            }
        },
        keyframes: {
            wiggle: {
              '0%, 100%': { transform: 'rotate(-3deg)' },
              '50%': { transform: 'rotate(3deg)' },
            }
          },
          keyframes: {
            dropDown: {
              '0%': { top: '-100px', transform: 'translateY(-100px)' },
              '100%': { top: '0', transform: 'translateY(0)' },
            }
          },
         
    },

    plugins: [require('@tailwindcss/forms')],
};
