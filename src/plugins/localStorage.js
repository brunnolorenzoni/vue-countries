export default {
  install: (app) => {
    app.config.globalProperties.$localStorage = {
      set: (key, value, expires = null) => {
        const item = { value }
        if(expires) item.expiry = new Date().getTime() + expires
        localStorage.setItem(key, JSON.stringify(item))
      },
      get: (key) => {
        const data = JSON.parse(localStorage.getItem(key))
        if(!data) return undefined
        if (data.expires) {
          if (new Date().getTime() < data.expires) return data.value
        }
        return data.value
      }
    }
  }
}