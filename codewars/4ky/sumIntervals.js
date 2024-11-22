function sumIntervals(intervals) {

    intervals.sort((a, b) => a[0] - b[0]);
  
    const mergedIntervals = [];
  
    for (let [start, end] of intervals) {

      if (!mergedIntervals.length || mergedIntervals[mergedIntervals.length - 1][1] < start) {
        mergedIntervals.push([start, end]);
      } else {

        mergedIntervals[mergedIntervals.length - 1][1] = Math.max(mergedIntervals[mergedIntervals.length - 1][1], end);
      }
    }
  
    return mergedIntervals.reduce((sum, [start, end]) => sum + (end - start), 0);
  }