/* eslint-disable no-restricted-syntax */
const copyClipboard = () => {
  const classShow = 'is-show'

  // eslint-disable-next-line no-undef
  const clipboard = new ClipboardJS('.btn-copy-clipboard')

  clipboard.on('success', e => {
    const tooltipElm = e.trigger.querySelector('.btn-copy-clipboard__tooltip')

    tooltipElm.classList.add(classShow)

    setTimeout(() => {
      tooltipElm.classList.remove(classShow)
    }, 700)

    e.clearSelection()
  })
}

export default copyClipboard
