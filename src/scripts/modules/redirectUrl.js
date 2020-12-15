const redirectUrl = () => {
  const path = window.location.pathname.slice(1)

  if (path) {
    window.location = window.location.pathname.replace(path, '')
  }
}

export default redirectUrl
