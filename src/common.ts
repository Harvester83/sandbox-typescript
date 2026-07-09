


// Utility Types

// Awaited<Type>

type A = Awaited<Promise<string>>; // type A = string
    
type B = Awaited<Promise<Promise<number>>>;  // type B = number
    
type C = Awaited<boolean | Promise<number>>; // type C = number | boolean



// Partial<Type>

interface Todo {
  title: string;
  description: string;
}
 
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
 
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
 
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});