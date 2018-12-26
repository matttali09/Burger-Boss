// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newDevourState = {
        devoured: newDevour
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurg = {
        burger_name: $("#burg").val().trim(),
      };
      
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurg
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-form").on("submit", function(event) {
      event.preventDefault();
      var burger_name = $("#del").val().trim();

      // Send the DELETE request.
      $.ajax("/api/burgers/" + burger_name, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", burger_name);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  