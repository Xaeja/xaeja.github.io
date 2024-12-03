document.querySelectorAll('ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const type = link.dataset.type;
        const items = document.querySelectorAll('.Works >.item');

        if (type === 'ALL') {
            items.forEach(item => {
                item.classList.add('scale-up');
                item.style.display = 'block';
            });
        } else {
            items.forEach(item => {
                if (item.dataset.type === type) {
                    item.classList.add('scale-up');
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    });
});