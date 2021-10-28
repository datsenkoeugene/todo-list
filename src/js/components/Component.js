export default class Component {
  constructor(selector, store) {
    this.$el = document.querySelector(selector)
    store.events.subscribe('change', () => this.render())
  }
}
