
Biohacking.FormBuilderA = function() {
  
  this.layout = {

     sections:[
      {
        fields: [{
          name: 'kind',
          mandatory: true,
          type: 'Lookup',
          options: Biohacking.KIND
        }]
      },
      {
        fields: [{
          name: 'logged_at',
          mandatory: true,
          type: 'Date'
        },{
          title: 'description',
          name: 'buttondescription',
          type: 'Button',
          handler: function(event, field, form){ 

          }
        }]
     },{
       fields: [{
          name: 'description',
          type: 'Text',
          hidden: true
       }]
     },{
       fields: [{
          name: 'Add',
          type: 'Button'
       }]
     }]
  };
  
  this.afterRender = function() {
    var input = this.el.querySelector("#buttondescription");
    var description = this.findField("description");
    input.addEventListener("click", function(evt){
      evt.preventDefault();          
      description.toggle();
    }.bind(this) );
  };
  
};
Biohacking.FormBuilderA.prototype = new Biohacking.FormBuilder;