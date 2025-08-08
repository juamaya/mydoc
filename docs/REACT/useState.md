---
sidebar_position: 8
---
 
# useState hook 

## Codigos en React

:::tip useState 
```jsx
import React, { useState } from 'react';

export   function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

```
:::

---

### Using the useEffect Hook

:::info useEffect
```jsx

import React, { useState, useEffect } from 'react';

export   function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


```
:::

---
### Using the useRef Hook

:::caution useRef
 

```jsx
import { useRef } from 'react';

export   function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('¡Hiciste clic ' + ref.current + ' veces!');
  }

  return (
    <button onClick={handleClick}>
      ¡Hazme clic!
    </button>
  );
}

```

:::




 

---