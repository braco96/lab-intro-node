// This class maintains a list of numbers always sorted in ascending order.
// Each method is commented to explain its purpose and implementation so that
// new developers can quickly understand the logic behind the operations.
class SortedList {
  constructor() {}
  constructor() {
    // Initialize an empty array to store the items
    this.items = [];
    // Track the number of elements explicitly as the exercise requires
    this.length = 0;
  }

  add(item) {
    // Push the new item and sort the array so it remains in ascending order
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    // Update the length property to reflect the number of elements stored
    this.length = this.items.length;
  }

  get(pos) {
    // Validate the requested position. Throw if it's outside the array bounds
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    // Return the element at the requested position
    return this.items[pos];
  }

  max() {
    // An empty list has no maximum; signal this with an error
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    // Since the list is sorted, the last element is the highest value
    return this.items[this.length - 1];
  }

  min() {
    // An empty list has no minimum; signal this with an error
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    // In a sorted list, the first element is the smallest value
    return this.items[0];
  }

  sum() {
    // Sum all elements using reduce. An empty list should result in 0
    return this.items.reduce((acc, val) => acc + val, 0);
  }

  avg() {
    // The average is undefined for an empty list, so throw an error
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    // Reuse the sum method and divide by the number of elements
    return this.sum() / this.length;
  }
}

module.exports = SortedList;