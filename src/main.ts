import './style.scss'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    Welcome to fitness
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
