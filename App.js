Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

    launch: function() {
        
        console.log(this.getContext().getDataContext());

        // Create a query to grab specific build definitions
        var query = this._createQuery();             

        // get the build store
        this._getBuildStore(query);



        


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
        
    },
    
    // Creates a query for specific build definitions
    _createQuery: function(){
    
        var q = Ext.create('Rally.data.QueryFilter', {
            property:'BuildDefinition',
            operator:'=',
            value: '/slm/webservice/1.37/builddefinition/6035424766' //PacSystems Mainline Build Definition
        });
        
        return q;
        
    },
    
    _getBuildStore: function(query){
        
        var builds = Ext.create('Rally.data.WsapiDataStore', {
            model: 'Build',
            fetch: true,
            listeners: {
                load: function(store,data,success) {
                    console.log("returned with data");
                    console.log(store,data);
                }
            },
            sorters: [{
                property: 'CreationDate',
                direction: 'DESC'
            }],
            filters: query,
            autoLoad: true,
            pageSize:20
        });
    }
        
    
    
});
