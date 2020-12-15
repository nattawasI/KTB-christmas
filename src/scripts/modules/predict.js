import dataPredict from './dataPredict'

const classShow = 'is-show'
// eslint-disable-next-line import/no-mutable-exports
let indexOfPredictRamdom = 0

const randomPredict = () => {
  const predictBoxElm = document.getElementById('predictBox')
  const predictTextItemElm = document.getElementById('btnTextQR')
  const predictBoxItemElm = predictBoxElm.querySelector('.predict-list__item')
  const predictBoxTitleElm = predictBoxElm.querySelector('.predict-list__title')
  const predictBoxTextElm = predictBoxElm.querySelector('.predict-list__text')
  const objectResult = dataPredict[Math.floor(Math.random() * dataPredict.length)]
  indexOfPredictRamdom = objectResult.id

  let orcodeType = ''
  let TextButtonPredict = ''

  switch (objectResult.donate) {
    case 'turtle':
      orcodeType = 'qrLove'
      TextButtonPredict = 'เติมบุญด้านความรัก คลิกเลย'
      break
    case 'priest':
      orcodeType = 'qrHealth'
      TextButtonPredict = 'เติมบุญด้านสุขภาพ คลิกเลย'
      break
    default:
      orcodeType = 'qrWork'
      TextButtonPredict = 'เติมบุญด้านการงาน คลิกเลย'
  }
  console.log(predictTextItemElm)
  console.log(TextButtonPredict)

  predictBoxItemElm.setAttribute('data-qr-target', orcodeType)
  predictBoxTitleElm.innerHTML = objectResult.title
  predictBoxTextElm.innerHTML = objectResult.desc

  predictTextItemElm.innerHTML = TextButtonPredict

  // set link to line & clipboard button share
  const btnLineShare = document.getElementById('btnLineShare')
  const btnClipboardShare = document.getElementById('inputClipboard')
  const urlShare = encodeURIComponent(`https://krungthaihny2021.com/share_${indexOfPredictRamdom}.html`)

  btnLineShare.setAttribute('href', `https://social-plugins.line.me/lineit/share?url=${urlShare}`)
  btnClipboardShare.setAttribute('value', `https://krungthaihny2021.com/share_${indexOfPredictRamdom}.html`)
}

const openPredict = () => {
  const marbleElm = document.getElementById('marble')
  const secMarbleElm = document.getElementById('secMarble')
  const secPredictElm = document.getElementById('secPredict')
  let secPredictElmTop = 0
  const classShake = 'is-shake'
  marbleElm.addEventListener('click', () => {
    if (!secPredictElm.classList.contains(classShow)) {
      marbleElm.classList.add(classShake)
      randomPredict()

      setTimeout(() => {
        secPredictElmTop = secMarbleElm.offsetTop + secMarbleElm.offsetHeight
        secPredictElm.classList.add(classShow)
        window.scrollTo({
          top: secPredictElmTop,
          behavior: 'smooth',
        })
        marbleElm.classList.remove(classShake)
      }, 1000)
    } else {
      window.scrollTo({
        top: secPredictElmTop,
        behavior: 'smooth',
      })
    }
  })
}

const setQrCode = target => {
  const pathImgQrCode = '/assets/image/modal/'
  const imgQrCodeElm = document.getElementById('imgQrCode')
  const buttonLoveParentElm = document.getElementById('buttonLove').parentNode
  const buttonBagParentElm = document.getElementById('buttonBag').parentNode
  const buttonHealthParentElm = document.getElementById('buttonHealth').parentNode

  if (target === 'qrWork') {
    imgQrCodeElm.setAttribute('src', `${pathImgQrCode}img_qrcode_1.png`)
    buttonLoveParentElm.style.display = 'flex'
    buttonBagParentElm.style.display = 'none'
    buttonHealthParentElm.style.display = 'flex'
  }

  if (target === 'qrLove') {
    imgQrCodeElm.setAttribute('src', `${pathImgQrCode}img_qrcode_2.png`)
    buttonLoveParentElm.style.display = 'none'
    buttonBagParentElm.style.display = 'flex'
    buttonHealthParentElm.style.display = 'flex'
  }

  if (target === 'qrHealth') {
    imgQrCodeElm.setAttribute('src', `${pathImgQrCode}img_qrcode_3.png`)
    buttonLoveParentElm.style.display = 'flex'
    buttonBagParentElm.style.display = 'flex'
    buttonHealthParentElm.style.display = 'none'
  }
}

const changeQrcode = () => {
  const buttonLoveElm = document.getElementById('buttonLove')
  buttonLoveElm.addEventListener('click', e => {
    e.preventDefault()
    setQrCode('qrLove')
  })

  const buttonBagElm = document.getElementById('buttonBag')
  buttonBagElm.addEventListener('click', e => {
    e.preventDefault()
    setQrCode('qrWork')
  })

  const buttonHealthElm = document.getElementById('buttonHealth')
  buttonHealthElm.addEventListener('click', e => {
    e.preventDefault()
    setQrCode('qrHealth')
  })
}

const openModalQrcode = () => {
  const modalElm = document.getElementById('modalQrcode')
  const buttonElm = document.getElementById('buttonOpenModalQrcode')

  buttonElm.addEventListener('click', e => {
    e.preventDefault()

    const htmlElm = document.getElementsByTagName('html')[0]
    const predictIsShowElm = document.querySelector('.predict-list__item')
    const target = predictIsShowElm.dataset.qrTarget

    // set qrcode before open
    setQrCode(target)

    // open
    modalElm.classList.add(classShow)
    setTimeout(() => {
      htmlElm.classList.add('is-locked')
      htmlElm.style.top = `${window.scrollY * -1}`
    }, 250)
  })
}

const predict = () => {
  openPredict()
  openModalQrcode()
  changeQrcode()
}

export {
  indexOfPredictRamdom
}

export default predict
