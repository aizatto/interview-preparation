import unittest

def quickSort(values):
  if len(values) <= 1:
    return values

  leftValues = []
  rightValues = []

  pivotElement = values.pop(0)
  centerValues = [pivotElement]

  while len(values) > 0:
    currentElement = values.pop(0)
    if currentElement == pivotElement:
      centerValues.append(currentElement)
    elif currentElement < pivotElement:
      leftValues.append(currentElement)
    else:
      rightValues.append(currentElement)
  
  leftValuesSorted = quickSort(leftValues)
  rightValuesSorted = quickSort(rightValues)

  return leftValuesSorted + centerValues + rightValuesSorted

class TestQuickSort(unittest.TestCase):

  def test_WorstCase(self):
    self.assertEqual(
      quickSort([5, 4, 3, 2, 1]),
      [1, 2, 3, 4, 5]
    )

if __name__ == '__main__':
  unittest.main()
