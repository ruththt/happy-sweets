
function App(){

const tasks=[
  {id:1,title:"Learn React basics",completed:true},
  {id:2,title:"Practise JSX",completed:true},
  {id:3,title:"Understand unconditional rendering",completed:false},
];
return(
  <div> 
  {tasks.map (task=> (
   <li key={task.id}>{task.title}{task.completed ? "   available" :     "  not available"}</li> 
  ))}
  </div>
)
}
export default App;