def insertionSort(array):
  arrayLength = len(array)
  for i in range(1, arrayLength):
    j = i
    while j >= 1 and j < arrayLength and array[j] < array[j - 1]:
      array[j], array[j - 1] = array[j - 1], array[j]
      j -= 1
#      print(f"i: {i}, j: {j}, {array[j]}")
  return array