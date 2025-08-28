#  Question and Answer

## 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**Answer:**

There are some methods to find or select elements of a HTML file from a JavaScript file. Among them the popular methods are **getElementById, getElementsByClassName, and querySelector or querySelectorAll**. But some methods are used to find element as uniquely and some methods are used to find elements both uniquely and collectively. For example: <br>
- **getElementById:** Basically this method is used to find element just as uniquely by using id name of that element. <br>
  - const element = document.getElementById('id_name')<br>
- **getElementsByClassName:** This method is used to find elements as both uniquely and collectively by using class name of elements.<br>
  - const list = document.getElementsByClassName('class_name') <br>
  This way provide the elements as collectively whose have the same class_name. That means here 'list' is a NodeList of the seleted elements as like as array/list. So we can access the each single element using 0 based index/serial like list[0], list[1] etc.
  - const list = document.getElementsByClassName('class_name')[index_number] <br>
In this way we can directly find the each single element by using index number.

- **querySelector/querySelectorAll:** These are almost same as like as **getElementById** and **getElementsByClassName** respectively. And the main difference is **querySelector** is needed hash operator (#) as prefix to id_name and **querySelectorAll** is needed dot opertor(.) as prefix to class_name. Although **querySelector** finds element uniquely, but class can be used and it provide the first element under that class name. And **querySelectorAll** functionally behaves as same as **getElementsByClassName**. <br>
  - document.querySelector('#id_name')
  - document.querySelector('.class_name')
  - document.querySelector('.class_name')
  - document.querySelector('.class_name')[index_number]

---

## 2. How do you **create and insert a new element into the DOM**?

**Answer:**

step-1: crecte element using tagname <br>
- const newElement = document.createElement('p')

step-2: set the value to the element <br>
- newElement.innerText = "New paragraph is added";
- newElement.innerHTML = `HTML CODE`;

step-3: find the container/mother element <br>
- const container = document.getElementById("container-element-id");

step-4: insert/append the newElement into the container <br>
- container.appendChild(newElement);
- container.insertBefore(newElement,container.firstchild);
- container.insertBefore(newElement,any-specific-element);

---

## 3. What is **Event Bubbling** and how does it work?

**Answer**

Event bubbling is the process in the DOM where an event starts from the target element (the one that triggered the event) and bubbles up through its ancestors until it reaches the root (document). 

More simply, lets a 'button' inside a 'div' and the 'div' inside a section, and then when the 'button' is clicked then event triggered as button -> div -> section -> body -> document -> window

lets,
```<body>
  <section id="grandParent"> 
  <div id="parent"> <button id="child">Click Me</button> </div> 
  </section>

  <script>
    document.getElementById("grandParent").addEventListener('click',()=>{
      console.log("Click happened to grandParent section")
    });
    document.getElementById("Parent").addEventListener('click',()=>{
      console.log("Click happened to Parent div")
    });
    document.getElementById("child").addEventListener('click',()=>{
      console.log("Click happened to button")
    });
  </script>
 </body>
 ```

**Here, when button is clicked**
Click happened to button <br> 
Click happened to Parent div <br>
Click happened to grandParent section <br>
Because event first happened to child button, bubbles to div, section, body.  
---
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---
