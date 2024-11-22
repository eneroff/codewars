function enough(cap, on, wait) {
    return Math.max(0, on+wait-cap);
  }