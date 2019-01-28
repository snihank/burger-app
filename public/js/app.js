



// Adding a new burger(insertOne)
$('#add_burger').on('click', function(event){
  event.preventDefault();

  var burgerName = $('#burger_input').val().trim();
  console.log(burgerName);
  $.ajax( '/add', {
   
    type: 'POST',
    data: {burgerName: burgerName}
    
  }).then(function(){
    alert('New Burger Added');
    console.log("New Burger Added " + burgerName);
    location.reload();
  });
})

// Updating a burger(updateOne)
$('#burger_devoured').on('click', function(event){
  event.preventDefault();

 

  
})
