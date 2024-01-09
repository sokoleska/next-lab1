export function getPascalsTriangleRow(rowIndex: number): number[] {
  if (rowIndex < 0) {
    return []
  }

  let lastRow = [1]

  for (let i = 1; i <= rowIndex; i++) {
    let row = []

    row[0] = 1

    // to get the numers in that row
    for (let j = 1; j < i; j++) {
      row[j] = lastRow[j - 1] + lastRow[j]
    }

    row[i] = 1

    lastRow = [...row]
  }

  return lastRow
}
