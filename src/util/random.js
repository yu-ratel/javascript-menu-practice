const random = {
  shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
}

export default random;
