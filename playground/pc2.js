require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('60b793c70948994a6081877d').then((task) => {
//   console.log(task)
//   return Task.countDocuments({completed: false})
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

const deleteTaskAndCount = async (id) => {
  const del = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({completed: false})
  return(count)
}

deleteTaskAndCount('60b791ee5834f135fcc8e650').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})