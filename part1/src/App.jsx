const Header = (props) => {
    return(
        <h1>{props.name}</h1>
    )
}
const Content = (props) => {

    return (
           <p>{props.parts} {props.exercise}</p>   
    )
}
const Total = (props) => {
    return (
      <p>
        Number of exercises {props.exer1 + props.exer2 + props.exer3}
      </p>
        
    )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header name={course}/>
      <p>
        <Content parts={part1} exercise={exercises1}/>
      </p>
      <p>
         <Content parts={part2} exercise= {exercises2}/>
      </p>
      <p>
         <Content parts={part3} exercise={exercises3}/>
      </p>
      <p>
        <Total exer1={exercises1} exer2= {exercises2} exer3 = {exercises3} />
      </p>
    </>
  )
}

export default App