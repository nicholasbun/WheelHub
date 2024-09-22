const sections = document.querySelectorAll('section');

sections.forEach(function(section) {

    window.addEventListener("load", addActive);
    window.addEventListener("scroll", addActive);

    function addActive() {
        let windowHeight = window.innerHeight;
        let sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < windowHeight) {
            section.classList.add('active-section');
        }
    }
    window.addEventListener("scroll", () => {
        let revealEffect = section.querySelectorAll('.reveal-effect');
        revealEffect.forEach((rev, idx) => {
            let windowHeight = window.innerHeight;
            let sectionTop = section.getBoundingClientRect().top;
            let offset = 350;

            if (sectionTop < windowHeight - offset) {
                const delay = 500;

                setTimeout(() => {
                    rev.classList.add('active-item');
                }, idx * delay);
            }
        })
    })
    window.addEventListener("load", () => {
        let revealEffect = section.querySelectorAll(".reveal-effect");

        revealEffect.forEach((rev, idx) => {
            let windowHeight = window.innerHeight;
            let sectionTop = section.getBoundingClientRect().top;
            let offset = 1;

            if (sectionTop < windowHeight + offset) {
                const delay = 500;

                setTimeout(() => {
                    rev.classList.add('active-item');
                }, idx * delay);
            }
        })
    })

})

const buttonScroll = document.getElementById('button-scroll');

buttonScroll.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'})
})

window.addEventListener("scroll", function() {
    console.log(window.innerHeight)
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    const middleThreshold = 0.05; // 5% tolerance for middle
    const middlePosition = (documentHeight - windowHeight) / 2;

    const position = Math.abs(scrollPosition - middlePosition);
    if (position <= (windowHeight * middleThreshold)) {
        buttonScroll.className = "button-scroll";
    }
})