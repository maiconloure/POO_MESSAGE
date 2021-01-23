export let users = [
  { name: "Maicon Lourenço", code: "44EE22AA"},
]

export class User {
  public name: string
  public code: string

  constructor(name: string, code: string) {
    this.name = name
    this.code = code
  }

  getUser() {
    return {name: this.name, code: this.code}
  }

  setUser(name?: string, code?: string) {
    this.name = name || this.name
    this.code = code || this.code
  }
}