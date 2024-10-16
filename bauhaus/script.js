document.addEventListener('DOMContentLoaded', function() {
    // Get started button
    const getStartedButton = document.querySelector('#getStartedBtn');
    getStartedButton.addEventListener('mouseover', () => {
        getStartedButton.style.setProperty('animation', 'zoomInOut 1s infinite');
    })
    getStartedButton.addEventListener('mouseleave', () => {
        getStartedButton.style.setProperty('animation', 'none');
    })

    // Initialize Lucide icons
    lucide.createIcons();

    const HeroText = document.querySelector('#HeroText');

    document.documentElement.setAttribute('lang', navigator.language)


    const hiddenText = function () {
        setTimeout(() => {
            HeroText.style.setProperty('visibility', 'visible');
            HeroText.style.setProperty('animation', 'slideInLeft .5s ease-in-out');
        }, 1000);
    };

    hiddenText();

    function animationType (animation, block) {
        return () => {
            const children = block.querySelectorAll('*')
            children.forEach(child => {
                child.style.setProperty('animation', `${animation} 1s forwards`);
            })
            block.style.setProperty('animation', `${animation} 1s forwards`);
        }
    }

    // Animation for the icons

    const lightning= document.querySelector('#lightning')
    const scalable = document.querySelector('#scalable')
    const secure = document.querySelector('#secure')
    const userFriendly = document.querySelector('#user-friendly')

    lightning.addEventListener('mouseover', (animationType('whitetoyellow', lightning)));
    lightning.addEventListener('mouseleave', (animationType('yellowtowhite', lightning)));

    scalable.addEventListener('mouseover', (animationType('whitetoblue', scalable)));
    scalable.addEventListener('mouseleave', (animationType('bluetowhite', scalable)));

    secure.addEventListener('mouseover', (animationType('whitetored', secure)));
    secure.addEventListener('mouseleave', (animationType('redtowhite', secure)));

    userFriendly.addEventListener('mouseover', (animationType('whitetoblack', userFriendly)));
    userFriendly.addEventListener('mouseleave', (animationType('blacktowhite', userFriendly)));

    // Animation for prices blocks

    const basic = document.querySelector('#basic-container')
    const pro = document.querySelector('#pro-container')
    const custom = document.querySelector('#custom-container')

    // Basic price block
        basic.addEventListener('mouseover',() => {
            basic.style.setProperty('transform', 'scale(1.1)');
            basic.style.setProperty('transition-duration', '0.3s');
        })
        basic.addEventListener('mouseleave',() => {
            basic.style.setProperty('transform', 'scale(1)');
        })

    // Pro price block
        pro.addEventListener('mouseover',() => {
            pro.style.setProperty('transform', 'scale(1.1)');
            pro.style.setProperty('transition-duration', '0.3s');
        })
        pro.addEventListener('mouseleave',() => {
            pro.style.setProperty('transform', 'scale(1)');
        })

    // Custom price block
        custom.addEventListener('mouseover',() => {
            custom.style.setProperty('transform', 'scale(1.1)');
            custom.style.setProperty('transition-duration', '0.3s');
        })
        custom.addEventListener('mouseleave',() => {
            custom.style.setProperty('transform', 'scale(1)');
        })

    // Accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const currentlyActiveItem = document.querySelector('.accordion-item.active');
            if (currentlyActiveItem && currentlyActiveItem !== item) {
                currentlyActiveItem.classList.remove('active');
            }
            item.classList.toggle('active');
        });
    });

    // Get in touch button
    const getInTouchButton = document.querySelector('#getInTouch');
    getInTouchButton.addEventListener('mouseover', () => {
        getInTouchButton.style.setProperty('animation', 'zoomInOut 1s infinite');
    })
    getInTouchButton.addEventListener('mouseleave', () => {
        getInTouchButton.style.setProperty('animation', 'none');
    })

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission (you can add your own logic here)
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted!is a demo, no actual submission occurred)');
    });
});