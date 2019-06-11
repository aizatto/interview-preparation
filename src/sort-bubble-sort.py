def bubbleSort(array):
  arrayLength = len(array) - 1;
  for i in range(arrayLength):
    for j in range(arrayLength - i):
#      print(f"i: {i}, j: {j}, {array[j]}")
      if array[j] > array[j + 1]:
        array[j], array[j + 1] = array[j + 1], array[j]
  return array