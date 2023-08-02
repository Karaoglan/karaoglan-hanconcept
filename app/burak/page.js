'use client';

import {use, useEffect, useState} from 'react';

async function getData(id) {
  await new Promise((r) => setTimeout(r, 2000));
  const x = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  return x.json();
}

function Burak() {
  const [data, setData] = useState(null)
  const [todo, setTodo] = useState(null)
  const [todoId, setTodoId] = useState(null)

  /*useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setData(data)
        }, 2000)
      })
  }, [])*/

  useEffect(() => {
    if (todoId) {
      console.log('loading')
      setTimeout(() => {
        getData(todoId)
      }, 1000)
    }
  }, [todoId])


  //console.log('haha')
  //const todo = use(getData())
  //console.log(todo)

  return <div><input name={"todo?"} onChange={(e) => setTodoId(e.target.value)} />Burak hello {JSON.stringify(todo)} -- dataname? {data?.name}</div>
}

export default Burak
