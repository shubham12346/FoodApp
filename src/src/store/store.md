# what is the difference between all three of them

```

 <h1
  onClick={handleClick}
  onClick ={()=> handleClick(item)}
  onClick ={handleClick(item)}
 ></h1>

```

when we subscribe to store we need to very specific which data we want to so it will be more optimize

for eg

```
const store = useSelector((store)=> store)
```

if we do this we have subscribe to whole store , if there are change an other state than our component will also be rendered is it has nothing to do with that state

# older redux - vanilla
