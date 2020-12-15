/* eslint-disable space-before-function-paren */
import { indexOfPredictRamdom } from './predict'

const facebookShare = () => {
  const btnShareFbElm = document.getElementById('bthFacebookShare')

  btnShareFbElm.addEventListener('click', e => {
    e.preventDefault()
    // eslint-disable-next-line no-undef
    const urlMain = 'https://krungthaihny2021.com/'
    const urlShare = encodeURIComponent(`${urlMain}share_${indexOfPredictRamdom}.html`)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${urlShare}&hashtag=%23KrungthaiHNY2021`, 'fbShareWindow')
  })
}

const twitterShare = () => {
  const btnShareFbElm = document.getElementById('bthTwitterShare')
  btnShareFbElm.addEventListener('click', e => {
    e.preventDefault()
    // eslint-disable-next-line no-undef
    const urlShare = encodeURIComponent(`https://krungthaihny2021.com/share_${indexOfPredictRamdom}.html`)
    window.open(`https://twitter.com/intent/tweet?hashtags=KrungthaiHNY2021&url=${urlShare}`, 'twShareWindow')
  })
}

const snsShare = () => {
  facebookShare()
  twitterShare()
}

export default snsShare
