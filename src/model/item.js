class Item {
  constructor(props) {

    if (props) {
      this.id = props.id
      this.avatar =  props.avatar
      this.title = props.title
      this.category = props.category
    } else {
      this.id = ""
      this.avatar =  ""
      this.title = ""
      this.category = ""
    }
  }
}

export default Item