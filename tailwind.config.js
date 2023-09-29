/** @type {import('tailwindcss').Config} */
module.exports = {
        content: [
          "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
          extend: {
                animation: {
                        wiggle: 'wiggle 1s ease-in-out infinite',
                        shake: 'shake 1s ease-in-out infinite',
                      },
                keyframes: {
                        wiggle: {
                          '0%, 100%': { transform: 'scale(1)' },
                          '50%': { transform: 'scale(1.2)' },
                        },
                        shake: {
                                '0%, 100%': { transform: 'rotate(0deg)' },
                                '25%, 75%':{transform: 'rotate(-10deg)'},
                                '50%': { transform: 'rotate(10deg)' },
                              }
                      },
          },
        },
        plugins: [],
      }

//       Samanta@123
