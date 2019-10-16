$(function(){
  $('.devour-btn').on('click', function (event) {
    console.log('click!')
    var id = $(this).data("id");
    var gotEaten = $(this).data('newdevoured');
    console.log(gotEaten, id);
    var getEaten = {
      devoured = gotEaten
    };
    console.log(getEaten)
    $.ajax('/api/burgers/' + id, {
      type: "PUT",
      data: gotEaten
    }).then(function () {
      console.log('BURGER DEVOURED');
      location.reload();
    });
  });

  $('.add-burger').on('submit', function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $('#burg-name').val().trim(),
      devoured: $('[name=devoured]:checked').val()
    };

    $.post('/api/burgers', newBurger).then(function () {
      console.log('BURGER UP!');
      location.reload();
    })
  })
})