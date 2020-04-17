export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },

  render() {
    return <div>{this.name}</div>;
  }
};
