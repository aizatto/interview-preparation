import unittest

def SelectionSort(values):
  if len(values) <= 1:
    return values

  length = len(values)

  for i in range(length):
    indexToSwap = i
    smallest = values[i]

    for j in range(i, length):
      if values[j] < smallest:
        indexToSwap = j
        smallest = values[j];

    if i != indexToSwap:
      values[indexToSwap], values[i] = values[i], values[indexToSwap]

  return values

class TestQuickSort(unittest.TestCase):

  def test_WorstCase(self):
    self.assertEqual(
      SelectionSort([5, 4, 3, 2, 1]),
      [1, 2, 3, 4, 5]
    )

if __name__ == '__main__':
  unittest.main()

