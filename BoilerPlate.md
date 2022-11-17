# Boiler Plate Code


```javascript
function fn_name(executionContext) {

     // Get formContext
	var formContext = executionContext.getFormContext();

    // formContext.getAttribute -- Retrieves the Attribute
	var attr_name = formContext.getAttribute('publishername_attrNmae').getValue();
   // formContext.getAttribute --Set Required Level
	formContext.getAttribute("publishername_attrNmae").setRequiredLevel("none");	
}
```
![image](https://user-images.githubusercontent.com/49652785/202366541-c0ffafe1-2053-4122-9cda-4fe8753d7381.png)

## TAB NAME & SECTION NAME
```javascript
	formContext.ui.tabs.get("TAB_NAME").sections.get("SECTION_NAME").setVisible(true);
```
![image](https://user-images.githubusercontent.com/49652785/202366394-c149cf58-8d32-47ee-a2c7-99cbb68adba5.png)

![image](https://user-images.githubusercontent.com/49652785/202367074-ecb206bc-8c91-4384-b01c-246c3897b14a.png)

## GET CONTROL

```javascript
	formContext.getControl("publishername_attrNmae").setVisible(true);
```
![image](https://user-images.githubusercontent.com/49652785/202375042-369d46a0-d677-4761-9215-6f8f35d69392.png)
## formContext.UI


```javascript
formContext.ui.setFormNotification(message, level, uniqueId);

```
![image](https://user-images.githubusercontent.com/49652785/202375302-38160a7a-54e2-4d78-be8c-9365aa070a0d.png)
