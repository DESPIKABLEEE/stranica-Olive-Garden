import { makeAutoObservable } from 'mobx'

class ScrollStore {
  scrolled = false
  mobileMenuOpen = false

  constructor() {
    makeAutoObservable(this)
    
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  handleScroll = () => {
    const isScrolled = window.scrollY > 50
    if (isScrolled !== this.scrolled) {
      this.setScrolled(isScrolled)
    }
  }

  setScrolled(value) {
    this.scrolled = value
  }

  toggleMobileMenu = () => {
    this.mobileMenuOpen = !this.mobileMenuOpen
  }

  closeMobileMenu = () => {
    this.mobileMenuOpen = false
  }

  dispose() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
}


const scrollStore = new ScrollStore()

export default scrollStore
