const videocards=[...document.querySelectorAll('.video-card')];

videocards.forEach(item => {
    item.addEventListener('mouseover',()=> {
        let video= item.children[1];
        video.play()
    });
    item.addEventListener('mouseleave',()=>{
        let video=item.children[1];
        video.pause();
    });
});
