const AnimalItem = ({animal}) => {
    return (
        <li key={animal}>
        {animal ?? "null,undefinedでした"}
        {animal === "Dog" && "★"}
      </li>
    )
}

export default AnimalItem;