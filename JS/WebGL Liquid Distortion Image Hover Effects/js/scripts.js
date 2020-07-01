Array.from(document.querySelectorAll('.imgBox')).forEach((e) =>{
	const imgs = Array.from(e.querySelectorAll('img'));
	new hoverEffect({
        parent: e,
        intensity: 0.3,
        image1: imgs[0].getAttribute('src'),
        image2: imgs[1].getAttribute('src'),
        displacementImage: 'images/displacement/14.jpg'
    });
});