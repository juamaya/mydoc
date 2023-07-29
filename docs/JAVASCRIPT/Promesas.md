---
sidebar_position: 3
---

## Codigos en  Javascript

![Alt text](../../static/img-png/JS.png) 

---

### Usando FETCH  

```javascript

const getName = (idPost) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then((res) => {
      return res.json();
    })
    .then((post) => {
      console.log(post.userId);
      fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then((res) => {
          return res.json();
        })
        .then((user) => {
          //console.log(user );
          console.log(user.name);
          // console.log(user.phone);

          console.log("FETCH");
        });
    });
};

getName(1);

``` 
---

### Usando   ASYNC AWAIT  


```javascript

const getNameAwait = async (idPost) => {
  try {
    const resPost = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${idPost}`
    );
    const post = await resPost.json();
    // console.log(post);

    const resUser = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`
    );

    const user = await resUser.json();

    //console.log(user);
    console.log(user.name);
    // console.log(user.phone);
    console.log("ASYNC AWAIT");
  } catch (error) {
    console.log(error);
  }
};

getNameAwait(1);

``` 
---

### Usando AXIOS  
 
```javascript 

const getNameAxios = async (idPost) => {
  try {
    const resPost = await axios(
      `https://jsonplaceholder.typicode.com/posts/${idPost}`
    );

    const resUser = await axios(
      `https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`
    );

    console.log(resUser);
    console.log(resUser.data);
    console.log(resUser.status);
    console.log(resUser.data.name);
    // console.log(resUser.data.title);
    // console.log(resUser.data.body);

    console.log("AXIOS");
  } catch (error) {
    console.log(error);
  }
};

getNameAxios(1);

``` 