class Comment {
  constructor(text){
    this.text = text
  }

  render(){
    this.text = `<li>${this.text}</li>`
    return this.text
  }
}
