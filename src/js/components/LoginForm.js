import Component from './Component.js'
import store from '../redux/store.js'
import { isLogIn } from '../redux/actions.js'

export default class LoginForm extends Component {
  constructor(selector, store) {
    super(selector, store)
    this.setup()       
  }

  render() { 
    const { isLogin } = store.getState()
    
    this.$el.innerHTML = `
            <form class="form login-form" style="display: ${isLogin ? 'none' : 'flex'};">
                <h2>Login</h2>
                <input 
                    class="form__input"
                    type="email"
                    placeholder="E-mail"
                    required                                                                                           
                />
                <input 
                    class="form__input"
                    type="password"
                    placeholder="Password"
                    required                                                                                            
                />
                <button type="submit" class="form__btn" >Login</button>
            </form>    
        `   
  }

  setup() {
    this.$el.addEventListener('submit', this.login)    
  }

  login(e) {      
    e.preventDefault()
    const email = e.target.querySelector('[type="email"]')
    const password = e.target.querySelector('[type="password"]')
    const user = {
      email: email.value.trim(),
      password: password.value.trim()
    }
    store.dispatch(isLogIn())
  }
}