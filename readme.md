## 6. Qustion and Answer

## 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**Answer:** There are some methods to find or select elements of a HTML file from a JavaScript file. Among them the popular methods are **getElementById, getElementsByClassName, and querySelector or querySelectorAll**. But some methods are used to find element as uniquely and some methods are used to find elements both uniquely and collectively. For example:
- **getElementById:** Basically this method is used to find element just as uniquely by using id name of that element. 
** **Syntax:** const element = document.getElementById('id_name')
- **getElementsByClassName:** This method is used to find elements as both uniquely and collectively by using class name of elements.

**  **Syntax-1:** const list = document.getElementsByClassName('class_name')
This way provide the elements as collectively whose have the same class_name. That means here 'list' is a NodeList of the seleted elements as like as array/list. So we can access the each single element using 0 based index/serial like list[0], list[1] etc.

**  **syntax-2** const list = document.getElementsByClassName('class_name')[index_number]

In this way we can directly find the each single element by using index number.
- **querySelector/querySelectorAll:** These are almost same as like as **getElementById** and **getElementsByClassName** respectively. And the main difference is **querySelector** is needed hash operator (#) as prefix to id_name and **querySelectorAll** is needed dot opertor(.) as prefix to class_name. Although **querySelector** finds element uniquely, but class can be used and it provide the first element under that class name. And **querySelectorAll** functionally behaves as same as **getElementsByClassName**.

**  **syntax-1:** document.querySelector('#id_name') 
**  **syntax-2:** document.querySelector('.class_name') 
**  **syntax-3:** document.querySelector('.class_name') 
**  **syntax-4:** document.querySelector('.class_name')[index_number]
---

## 2. How do you **create and insert a new element into the DOM**?
**Answer:**
<!-- crecte element using tagname -->
const newElement = document.createElement('p')
<!-- set the value to the element -->
newElement.innerText = "New paragraph is added";
<!-- find the container/mother element -->
const container = document.getElementById("container-element-id");
<!-- insert/append the newElement into the container -->
**  container.appendChild(newElement);
**  container.insertBefore(newElement,container.firstchild);
**  container.insertBefore(newElement,any-specific-element);
---
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?
---