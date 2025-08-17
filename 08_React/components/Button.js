export default function Button(props) {
    console.log(props)
    // const {imageURL}=props
    const URL=props.imageURL

    // console.log(image)
  return (<button>
    <img src={URL}></img>
  </button>)
}

