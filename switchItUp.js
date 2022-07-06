function switchItUp(number){
    return ({
      0: 'Zero',
      1: 'One',
      2: 'Two',
      3: 'Three',
      4: 'Four',
      5: 'Five',
      6: 'Six',
      7: 'Seven',
      8: 'Eight',
      9: 'Nine',
    })[number]
  }

  // Refactored

  switchItUp = n => ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]