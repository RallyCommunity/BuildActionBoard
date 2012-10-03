Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

    launch: function() {
        
        console.log(this.getContext().getDataContext());

        Rally.data.ModelFactory.getModel({
            type:'Build Definition',
            scope:this,
            success: function(model){
                
                var myGrid = Ext.create('Rally.ui.grid.Grid',{
                    model: model,
                    columnCfgs: [
                        'Name',
                        'Description',
                        'LastStatus'
                        ]
                });
                this.add(myGrid);
                        
                
            },
            failure: function(){
                console.log("failed");
            },
            context: {
                workspace: "/workspace/4365660833"
            }
            
        });
        
        
        
        
        
        
        
        var msgBox = Ext.MessageBox;
        var myButton = Ext.create('Rally.ui.Button',{
            text:'click me!',
            handler:function(button,e){
                msgBox.alert("clicked!");
            }
            
        });
        
        
        
        this.add(myButton);
        
    }
});
