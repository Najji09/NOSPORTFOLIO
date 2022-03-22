document.addEventListener('DOMContentLoaded', function () {
  let ul = document.querySelectorAll('section.front ul');
  const gallery = () => {
    console.log(ul);
    ul.forEach((list, index) => {
      const [x, xEnd] =
        index === 1
          ? ['100%', (ul.scrollWidth - ul.offsetWidth) * -1]
          : [ul.scrollWidth * -1, 0];
      gsap.fromTo(
        list,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: ul,
            scrub: 0.5,
          },
        }
      );
    });
  };
  gallery();
  console.log(ul);
});
