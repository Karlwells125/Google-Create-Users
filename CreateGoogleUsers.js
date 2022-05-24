function CreateUsers() {

    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Script')
        .addItem('Create Users', 'Create Users')
        .addToUi();
  }
  {
        var ss = SpreadsheetApp.getActive()
        var sheet = ss.getSheetByName("Sheet1")
        var range = sheet.getDataRange();
        var values = range.getValues();
        
  
        Logger.log (values)  
  
       for(i=1; i <values.length; i++)
    {
      
      var fName = values[i][0]
      var lName = values[i][1]
      var email = values[i][2]
      var password = values[i][3]
      var orgUnitPath = values[i][4]
      var team = values[i][5]
      var office = values[i][6]
      var user = {
        
        "primaryEmail": email,
         "password": password, 
        "orgUnitPath": orgUnitPath,
        "name": {
          "familyName": lName,
          "givenName": fName
        }
     
      }
  
       user = AdminDirectory.Users.insert(user);
  
    }}
    // Enter team names and the required Google groups for each team
      {
       if (team == "IT") {
        var groupEmail = 
        var groupEmail2 = 
        var groupEmail3 = 
       }
       else if (team == "Tech Support") {
        var groupEmail = 
        var groupEmail2 = 
      }
       else if (team == "Finance") {
        var groupEmail = 
        var groupEmail2 = 
        var groupEmail3 = 
        var groupEmail4 = 
      }
       else if (team == "HR")  {
        var groupEmail = 
        var groupEmail2 = 
      }
       else if (team == "Sales") {
         var groupEmail =
         var groupEmail2 =

       else if (team == "Marketing") {
         var groupEmail = 
         var groupEmail2 = 
         var groupEmail3 = 
         var groupEmail4 = 
         var groupEmail5 = 
         var groupEmail6 = 
      }
       else if (team == "Account Management") {
         var groupEmail = 
         var groupEmail2 = 
         var groupEmail3 = 
         var groupEmail4 = 
      }
       else if (team == "Legal") {
         var groupEmail = 
         var groupEmail2 = 
         var groupEmail3 = 
         var groupEmail4 = 
         var groupEmail5 = 
         var groupEmail6 = 
         var groupEmail7 = 
      }
       else if (team == "Compliance") {
         var groupEmail = 
         var groupEmail2 = 
         var groupEmail3 = 
         var groupEmail4 = 
         var groupEmail5 = 
         var groupEmail6 = 
      }
       else if (team == "Technical Compliance") {
         var groupEmail = 
         var groupEmail2 = 
         var groupEmail3 = 

       else if (team == "Game Producer") {
         var groupEmail = 
         var groupEmail2 = 
         var groupEmail3 = 
         var groupEmail4 = 
         var groupEmail5 = 
       }
       else if (team == "Game Design") {
         var groupEmail = 
       }
       else if (team == "Game Development") {
         var groupEmail = 
         var groupEmail2 = 
         var groupEmail3 = 
         var groupEmail4 = 
         var groupEmail5 = 
         var groupEmail6 = 
         var groupEmail7 = 
         var groupEmail8 = 
         var groupEmail9 = 
         var groupEmail10 =
         var groupEmail11 = 
       }
       else if (team == "Art") {
         var groupEmail = 
         var groupEmail2 = 
         var groupEmail3 = 
         var groupEmail4 = 
         var groupEmail5 = 
         var groupEmail6 = 
         var groupEmail7 = 
         var groupEmail8 = 
         var groupEmail9 = 
         var groupEmail10 = 
       }
       else if (team == "Platform Development") {
         var groupEmail =
         var groupEmail2 = 
         var groupEmail3 = 
         var groupEmail4 = 
         var groupEmail5 = 
         var groupEmail6 = 
       }
       else if (team == "Infrastructure") {
         var groupEmail = 
         var groupEmail2 = 
         var groupEmail3 =
         var groupEmail4 = 
       }
       else if (team == "Game Server") {
         var groupEmail = 
         var groupEmail2 = 
         var groupEmail3 = 
         var groupEmail4 = 
         var groupEmail5 = 
       }
       else if (team == "Delivery/Product Owners") {
         var groupEmail = 
         var groupEmail2 = 
         var groupEmail3 = 
         var groupEmail4 =
         var groupEmail5 = 
         var groupEmail6 = 
       }
       else if (team == "Data") {
         var groupEmail = 
         var groupEmail2 = 
         var groupEmail3 = 
         var groupEmail4 = 
         var groupEmail5 = 
         var groupEmail6 = 
         var groupEmail7 = 
       }
       else if (team == "QA") {
         var groupEmail = 
         var groupEmail2 = 
         var groupEmail3 = 
         var groupEmail4 = 
         var groupEmail5 = 
         var groupEmail6 = 
         var groupEmail7 = 
       }
       else if (team == "Technical Support") {
         var groupEmail = 
         var groupEmail2 = 
         var groupEmail3 = 
       }
       else if (team == "Platform Releases") {
         var groupEmail = 
       }
       else if (team == "Operator Integrations") {
         var groupEmail = 
       }
       if (office == "UK") {
         var groupEmail4 = 
       }
       else if (office == "Ukraine") {
         var groupEmail4 = 
       }
       else if (office == "Malta") {
         var groupEmail4 = 
       }
  
      }
  
    var member = {
      email: email,
      role: "MEMBER"
    };
    member = AdminDirectory.Members.insert(member,  groupEmail);
    member = AdminDirectory.Members.insert(member,  groupEmail2);
    member = AdminDirectory.Members.insert(member,  groupEmail3);
    member = AdminDirectory.Members.insert(member,  groupEmail4);
    member = AdminDirectory.Members.insert(member,  groupEmail5);
    member = AdminDirectory.Members.insert(member,  groupEmail6);
    member = AdminDirectory.Members.insert(member,  groupEmail7);
    member = AdminDirectory.Members.insert(member,  groupEmail8);
    member = AdminDirectory.Members.insert(member,  groupEmail9);
    member = AdminDirectory.Members.insert(member,  groupEmail10);
    member = AdminDirectory.Members.insert(member,  groupEmail11);
  