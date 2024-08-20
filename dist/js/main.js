document.addEventListener('DOMContentLoaded',()=>{

    const menuBtn = document.querySelector('.menu-btn');
    const hamBurger = document.querySelector('.menu-btn_burger');
    const nav = document.querySelector('.nav');
    const menuNav = document.querySelector('.menu-nav');
    const navitems = document.querySelectorAll('.menu-nav_item');

    let showMenu = false;
     
    menuBtn.addEventListener('click',toggleMenu);

    function toggleMenu(){
        if(!showMenu){
            hamBurger.classList.add('open');
            nav.classList.add('open');
            menuNav.classList.add('open');
            navitems.forEach(item => item.classList.add('open'));

            showMenu = true;
        }
        else{
            hamBurger.classList.remove('open');
            nav.classList.remove('open');
            menuNav.classList.remove('open');
            navitems.forEach(item => item.classList.remove('open'));

            showMenu = false;
        }
    }

    // added a notification feature
    const notificationContainer = document.getElementById('notification-container');

    function showNotification(msg) {
        const notification = document.createElement('div');
        notification.className = 'notification';

        const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', () => closeNotification(notification));
        notification.appendChild(closeButton);

        const message = document.createElement('span');
        message.textContent = msg;
        notification.appendChild(message);

        notificationContainer.prepend(notification);

        notification.style.height = 'auto';

        const startTime = Date.now();
        const duration = 3000;

        const startTimer = (timeLeft) => {
            return setTimeout(() => {
                if (notificationContainer.contains(notification)) {
                    closeNotification(notification);
                }
            }, timeLeft);
        };

        let timer = startTimer(duration);

        notification.addEventListener('mouseenter', () => {
            clearTimeout(timer);
        });

        notification.addEventListener('mouseleave', () => {
            const elapsedTime = Date.now() - startTime;
            const timeLeft = duration - elapsedTime;

            if (timeLeft > 0) {
                timer = startTimer(timeLeft);
            } else {
                closeNotification(notification);
            }
        });
    }

    function closeNotification(notification) {
        notification.style.animation = 'slide-out 0.5s forwards';
        notification.addEventListener('animationend', () => {
            if (notificationContainer.contains(notification)) {
                notificationContainer.removeChild(notification);
            }
        });
    }

    
    document.querySelectorAll('a.projects_btn').forEach(button => {
        button.addEventListener('click',(e)=>{
            e.preventDefault();
            showNotification("Sample website! No links were added");
        });
    });
});