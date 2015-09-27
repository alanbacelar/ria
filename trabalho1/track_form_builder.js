Biohacking.TrackFormBuilder = function() {
  
  this.layout = {

     sections:[
     {
       hidden: true,
       fields: [{
         "class": "display",
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
  
};
Biohacking.TrackFormBuilder.prototype = new Biohacking.FormBuilder;