function itemSlide() {
  const $image1 = document.getElementById('itemSlide1')
  const $image2 = document.getElementById('itemSlide2')
  const $image3 = document.getElementById('itemSlide3')
  const $linkedIn = document.getElementById('linkedInContact')
  const $twitter = document.getElementById('twitterContact')
  const $github = document.getElementById('githubContact')

  const loadImage = (entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible')
      } 
      // else {
      //   entry.target.classList.remove('visible')
      // }
    })
  }
  const observer = new IntersectionObserver(loadImage, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5
  })
  
  observer.observe($image1)
  observer.observe($image2)
  observer.observe($image3)
  observer.observe($linkedIn)
  observer.observe($twitter)
  observer.observe($github)

}
export { itemSlide };
