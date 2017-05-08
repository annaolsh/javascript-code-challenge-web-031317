$(document).ready(function(){
  // your code here!
  const $form = $('#note-form')
  const url = 'index.html'
  const comment_list = new CommentList()



  $form.submit(function(event){
    event.preventDefault()
    var new_comment = new Comment(event.target[0].value)
    comment_list.addComment(new_comment.render())

    $('#comment-list').prepend(comment_list.render())

  })
})
