interface upperNameProps{
    name: string
}

const upperName = ({name}:upperNameProps) => name.toUpperCase()

export default upperName
