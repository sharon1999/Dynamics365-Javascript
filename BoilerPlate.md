# Boiler Plate Code

![image](https://user-images.githubusercontent.com/49652785/202365663-002f7c73-32d7-4ac2-88e5-854e6165f073.png)


## onLoad
```javascript
function fn_name(executionContext) {

    // Get formContext
	var formContext = executionContext.getFormContext();

    // formContext.getAttribute -- Retrieves the Attribute
	var attr_name = formContext.getAttribute('publishername_attrNmae').getValue();


}
```
