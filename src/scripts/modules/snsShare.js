/* eslint-disable space-before-function-paren */
import { indexOfPredictRamdom } from './predict'

const facebookShare = () => {
  const btnShareFbElm = document.getElementById('bthFacebookShare')
  // eslint-disable-next-line no-undef
  // const urlMain = 'https://krungthaihny2021.com/'
  // const urlShare = encodeURIComponent(`${urlMain}share_${indexOfPredictRamdom}.html`)
  btnShareFbElm.setAttribute('href', 'https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F&redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer')
  // window.open(`https://www.facebook.com/sharer/sharer.php?u=${urlShare}&hashtag=%23KrungthaiHNY2021`, 'fbShareWindow')
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
