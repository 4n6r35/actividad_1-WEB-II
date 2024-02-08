import { useState } from 'react'

import './App.css'
import { Card } from './components/Card/'
import { Contador } from './components/Contador'

function App() {
  const info = [{title:"junior", description:"akjfdohjiasdhasdjoiawshnidjadkhnadlkñawhndalkdnakdjnmlaakiad", img:"https://th.bing.com/th/id/R.ace04d34cdb40120c2b7a891d5b0a2b8?rik=CXEr2o%2fMXGS5fg&pid=ImgRaw&r=0"},
  {title:"nacional", description:"akgfdsfdsifsjdfijsdfisoq0eoq0eqe0q9eq0eq", img:"https://th.bing.com/th/id/R.3de4a5dac285db180f34d294d1892298?rik=Z2JhV4KnZnkDqw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-pC4q1Y_qN6Y%2fUSZr44HBi9I%2fAAAAAAAAABk%2fiSfzWuG4QZ4%2fs1600%2fescudo.jpg&ehk=fY59WXZpyPjYfAW%2bBOQnfGuhog1YFQmD2CfuFGjx93Y%3d&risl=&pid=ImgRaw&r=0"}]
  const [count, setCount] = useState(0)
  return (
    <>
    <section className='border-solid border-2 m-6 p-2'>
      <Card info={info[0]} />
    </section>
    <section className='flex flex-wrap justify-around gap-6 border-solid border-2 m-6 p-2 box-border'>
      {
        info.map(info=><Card key={info.title} count={count} info={info}/>)
      }
    </section>
      <section>
        <Contador count={count} setCount={setCount}/>
      </section>
    </>
  )
}

export default App
