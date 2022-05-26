//Control Section Visibility
function setSectionVisibility(tabname, sectionname, visibility, formContext){
    var tabObj = formContext.ui.tabs.get(tabname);
    var variableCondition = variableConditionCheck(tabObj);
    if(variableCondition==true){
        var sectionObj = tabObj.sections.get(sectionname);
        var sectionVariableCondtion = variableConditionCheck(sectionObj);
        if(sectionVariableCondtion==true){
            tabObj.setVisible(true);
            sectionObj.setVisible(visibility);
            tabObj.setFocus();
        }
        else{
            tabObj.setVisible(false);
        }
    }
}
