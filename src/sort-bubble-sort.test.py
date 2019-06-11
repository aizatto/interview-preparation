import unittest
import importlib.util
spec = importlib.util.spec_from_file_location("module.name", "./src/sort-bubble-sort.py")
sort = importlib.util.module_from_spec(spec)
spec.loader.exec_module(sort)

class TestBubbleSort(unittest.TestCase):

  def test_WorstCase(self):
    self.assertEqual(
      sort.bubbleSort([5, 4, 3, 2, 1]),
      [1, 2, 3, 4, 5]
    )

if __name__ == '__main__':
  unittest.main()