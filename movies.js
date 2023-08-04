       
        const movieContainers = document.querySelectorAll('.movie-line-container');

        movieContainers.forEach(container => {
            const moviesList = container.querySelector('.movies-list');
            const preBtn = container.querySelector('.pre-btn');
            const nxtBtn = container.querySelector('.nxt-btn');

            preBtn.addEventListener('click', () => {
                moviesList.scrollLeft -= moviesList.offsetWidth;
            });

            nxtBtn.addEventListener('click', () => {
                moviesList.scrollLeft += moviesList.offsetWidth;
            });
        });
        