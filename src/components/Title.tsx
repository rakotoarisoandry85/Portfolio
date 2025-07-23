interface TitleProps{
    title:string
}
const Title = ({title}:TitleProps) => {
  return (
    <h1 className="uppercase font-bold mb-5 text-center"> {title}</h1>
  )
}

export default Title