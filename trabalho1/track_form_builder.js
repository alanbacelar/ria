Biohacking.TrackFormBuilder = function() {
  
  this.layout = {

     sections:[
     {
       hidden: true,
       fields: [{
         "class": "display",
         name: 'msg',
         message: 'Atividade inserida com sucesso!',
         type: 'Display'
       }]
     },
      {
        fields: [{
          name: 'kind',
          mandatory: true,
          type: 'Lookup',
          options: Biohacking.KIND
        }]
      },
      {
        hidden: true,
        fields: [{
          name: 'logged_at',
          mandatory: true,
          type: 'Date'
        }]
     },{
       hidden: true,
       fields: [{
          name: 'description',
          placeholder: "Enter tags to edit",
          type: 'Text'
       }]
     },{
       fields: [{
          name: 'Add',
          type: 'Button'
       }]
     },{
       hidden: true,
       fields: [{
            name: 'Delete',
            type: 'Button'
         },{
           name: 'Done',
           type: 'Button'
        }]
     }]
  };

  this.afterRender = function() {
    var input = this.findField('Add').el;

    input.addEventListener("click", function(evt){
      var activeItem = this.getActiveItem();

      if (activeItem) {
        this.findField('Add').hide();
        this.findField('Delete').getSection().show();
        this.findField('logged_at').getSection().show();
        this.findField('description').getSection().show();
        
        this.el.querySelector('.list-group').parentElement.style.display = "none";

        // Show values
        console.log(this.getValues());
        this.findField('msg').getSection().show();
      } else {
        alert('Select an item.');
      }
      
    }.bind(this) );
  };
  
};

Biohacking.TrackFormBuilder.prototype = new Biohacking.FormBuilder;