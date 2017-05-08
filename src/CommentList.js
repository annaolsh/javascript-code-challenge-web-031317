class CommentList{
  constructor(comments){
    this.comments = []
  }

  render(){
    this.array = `<ul>${this.comments}</ul>`
    return this.array
  }

  addComment(text){
    var new_comment = new Comment(text)
    this.comments.push(new_comment)
  }
}
