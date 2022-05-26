# Template file for best coding standards
## onLoad
```javascript
function onLoad(executionContext){
    if (executionContext != null && executionContext != undefined && executionContext != ""){
        var formContext = executionContext.getFormContext();
        if (formContext != null && formContext != undefined && formContext != ""){
            //All functions for onLoad should be written here
            //functionname(formContext)
        }    
    }
}
```
## onSave

```javascript
function onSave(executionContext){    
    if (executionContext != null && executionContext != undefined && executionContext != ""){
        var formContext = executionContext.getFormContext();
        if (formContext != null && formContext != undefined && formContext != ""){
             //All functions for onSave should be written here
            //functionname(formContext)
        }    
    }    
}
```
## GET function
```javascript
function getControlValue(controlname, formContext) {
    var value = "";
    var control = formContext.getControl(controlname);
    if (control != undefined && control != null && control != "") {
    var attribute = control.getAttribute();
    if (attribute != undefined && attribute != null && attribute != "") {
      value = attribute.getValue();
    }
  }
  return value;
}
```
## SET function
```javascript
function setValue(controlname, value, formContext) {
  var control = formContext.getControl(controlname);
  if (control != undefined && control != null && control != "") {
    var attribute = control.getAttribute();
    if (attribute != undefined && attribute != null && attribute != "") {
      attribute.setValue(value);
    }
  }
}
```
## Check if a variable is null
```javascript
function variableConditionCheck(variable){
    var result = false;
    if (variable != null && variable != undefined && variable != ""){
        result = true;
    }
    return result;
}
```

