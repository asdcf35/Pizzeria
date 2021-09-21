menu_list_array = [
                    "Veg Margherita Pizza",
                    "Neapolitan Pizza",
                    "Chicago Pizza",
                    "New York-Style Pizza",
                    "Sicilian Pizza",
                    "Greek Pizza",
                  ];

function getmenu(){
    var htmldata;
    var imgtags = '<img src="https://www.pikpng.com/pngl/m/54-548943_pizza-clipart-png-pizza-clipart-png-clip-art.png" alt="Pizza Clipart Png Pizza Clipart Png - Clip Art Pizza Transparent Background@pikpng.com">'
    menu_list_array.sort();
            menu_list_array.array.forEach(element => {
                htmldata = element + '<br>'
            });
            document.getElementById("display_menu").innerHTML = htmldata;
            //give the appropriate id name as display_menu  
}

function add_item(){
        var htmldata;
        var imgtags = '<img src="https://www.pikpng.com/pngl/m/54-548943_pizza-clipart-png-pizza-clipart-png-clip-art.png" alt="Pizza Clipart Png Pizza Clipart Png - Clip Art Pizza Transparent Background@pikpng.com">'
        var item=document.getElementById("add_item").value;
                // use the sort function as - menu_list_array.sort();
                menu_list_array.sort();
                htmldata=""
                for(var i=0;i<menu_list_array.length;i++){
                    htmldata=htmldata+imgtags+menu_list_array[i]+'<br>';
                }
                document.getElementById("display_addedmenu").innerHTML = htmldata;		
            }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
