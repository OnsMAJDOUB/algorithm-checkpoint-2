function insertionSort(tab) {
  var n = tab.length;

  for (var i = 1; i < n; i++) {
    var temp = tab[i];
    var j = i - 1;

    while (j >= 0 && tab[j] > temp) {
      tab[j + 1] = tab[j];
      j = j - 1;
    }

    tab[j + 1] = temp;
  }
}
