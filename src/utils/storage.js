/**
 * sessionStorage封装
 */
const STORAGE_KEY = 'mall'

export default {
  setItem(key, value, module_name){
    if(module_name){
      const val = this.getItem(module_name)
      val[key] = value
      this.setItem(module_name, val)
    }else{
      const val = this.getStorage()
      val[key] = value
      this.setStorage(val)
    }
  },
  getItem(key, module_name){
    if(module_name){
      const val = this.getItem(module_name)
      if(val) return val[key]
    }
    return this.getStorage()[key]
  },
  setStorage(val){
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  },
  getStorage(){
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  clear(key, module_name){
    const val = this.getStorage()
    if(module_name){
      delete val[module_name][key]
    }else{
      delete val[key]
    }
    this.setStorage(val)
  }
}