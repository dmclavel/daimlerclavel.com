import { useState, useEffect } from 'react';

const useThemes = () => {
    const [theme, setTheme] = useState('');
    const [isMounted, setIsMounted] = useState(false);

    const toggleThemeState = () => {
        setTheme(prevState => {
            if (prevState === 'light') {
                return 'dark';
            } else {
                return 'light';
            }
        });
    };

    useEffect(() => {
        const localStrgTheme = window.localStorage.getItem('global-theme');

        window.onbeforeunload = function () {
            document.getElementById('main-block').style.display = 'none';

            window.scrollTo(0,0);

            // For Safari
            document.documentElement.scrollTop = 0;
        };

        if (localStrgTheme === 'light') {
            setTheme('light');
        } else {
            setTheme('dark');
        }   
        
        setIsMounted(true);

        return () => {
            setIsMounted(false);
        };
    }, []);

    useEffect(() => {
        try {
            if (theme === 'dark') {
                window.localStorage.setItem('global-theme', 'dark');
                document.querySelector('html').classList.add('dark');
                document.getElementById('dark-mode-circle').classList.add('animate-slider-right');
                document.getElementById('dark-mode-circle').classList.remove('animate-slider-left');
                document.getElementById('sun-light').classList.add('svg-sun-dark');
                document.getElementById('moon-dark').classList.add('svg-moon-dark');
                document.getElementById('sun-light').classList.remove('svg-sun-light');
                document.getElementById('moon-dark').classList.remove('svg-moon-light');
            } else {
                window.localStorage.setItem('global-theme', 'light');
                document.querySelector('html').classList.remove('dark');
                document.getElementById('dark-mode-circle').classList.add('animate-slider-left');
                document.getElementById('dark-mode-circle').classList.remove('animate-slider-right');
                document.getElementById('sun-light').classList.add('svg-sun-light');
                document.getElementById('moon-dark').classList.add('svg-moon-light');
                document.getElementById('sun-light').classList.remove('svg-sun-dark');
                document.getElementById('moon-dark').classList.remove('svg-moon-dark');
            }
        } catch (_e) {
           
        }
    }, [theme]);

    return [theme, isMounted, toggleThemeState];
};

export default useThemes;